import xs from 'xstream'
import flattenSequentially from 'xstream/extra/flattenSequentially'
import _ from 'lodash';
import ethutil from 'ethereumjs-util';
const BN = ethutil.BN;

import {StorageRx} from './storage-rx.js';



class Web3Rx {

    constructor(config) {
      this.RPC_URL = config.rpcUrl;
      this.WS_URL = config.wsUrl;

      this.StorageRx = new StorageRx(this.RPC_URL, this.WS_URL);
      this.PendingTx$ = this.StorageRx.PendingTx$;
    }


    watch(contract_address, abiRx, tx_list) {
      const self = this;
      const storage$ = self.StorageRx.watch(contract_address);

      const txArray$ = xs.fromArray(tx_list);
      const txHash$ = self.PendingTx$.map(pending_tx => pending_tx.hash);
      const txsToPluck$ = xs.merge(txArray$, txHash$);

      const mappingPCs = abiRx.mappingKeyBreakpoints;

      // TODO: do all the mappings in a contract, not just the first mapping (mappingPCs[0])
      // pluck mapping keys using debug.traceTransactions
      const mappingKeys$ = pluckMappingKeys(txsToPluck$, mappingPCs[0], self.RPC_URL);

      // TODO: get this offset from abiRx
      // we want to watch the mapping `TaskList`
      const MAPPING_STORAGE_OFFSET = 3;

      const mappingKeyLocations$ =
        mappingKeys$.map(function(keys_arr) {
          return convertKeysToStorageLocations(keys_arr, MAPPING_STORAGE_OFFSET);
        });


      // state_declaration_index is the solidity variable corresponding to the storage key we want to decode
      // state_declaration_index = 1 means it is the second declared variable in the contract code
      // TODO: get this index from abiRx
      // the values of `TaskList` are `Task` structs. but our ABIrx doesn't yet
      // work with struct definitions. as a workaround, we use the index of a
      // declaration (`itemTask`) of the struct we want to decode.
      const STATE_DECLARATION_INDEX = 1;

      const storageAndKeys$ =
        xs.combine(storage$, mappingKeyLocations$)
          .map(([storage_obs, mapping_key_locations]) => {
            return abiRx.decodeStorageMappings(mapping_key_locations, storage_obs.storageObject, STATE_DECLARATION_INDEX);
          });

      return storageAndKeys$;
      //return decodeStorage(storage$, contract_ABIrx, mappingKeys$);
    }


}


export default Web3Rx;








function requestPluckTrace(tx_hash, mapping_pcs, rpc_url) {
  console.log('requestPluckTrace called.');

  let pc_conditionals = mapping_pcs['keyPCs'].map(key_pc => `(log.pc == ${key_pc})`);
  let pc_conditional_expr = pc_conditionals.join(" || ");
  //pc_conditional_expr: (log.pc == 628) || (log.pc == 899) || (log.pc == 911) || (log.pc == 362) || (log.pc == 934) || (log.pc == 992)

  const req_obj = {
    jsonrpc: '2.0',
    method: 'debug_traceTransaction',
    params: [tx_hash,
      {"tracer":
        `{data: [], step: function(log) { if (${pc_conditional_expr}) this.data.push(log.stack.peek(0).Text(16)) }, result: function() { return this.data; }}`
      }],
    id: 1
  };


  let fetch_prom = function() {
    console.log('fetch_prom called.');
    let prom_res =
      fetch(rpc_url, {
        method: 'POST',
        body: JSON.stringify(req_obj)
      })
      .then(function(response) {
        return response.json();
      });
    return prom_res;
  };

  const res$ = xs.fromPromise(fetch_prom())
    .map(res => {
      console.log('requestPluckTrace xs map res:', res);
      return _.uniq(res.result);
    });

  return res$;

}





function concatTypedArrays(a, b) { // a, b TypedArray of same type
  let c = new (a.constructor)(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}





function pluckMappingKeys(txList$, mapping_pcs, rpc_url) {
  console.log('pluckMappingKeys called with txList$:', txList$);

  const plucked_keys$ = txList$.map(tx => {
    console.log('calling requestPluckTrace tx:', tx, (new Date).toISOString());
    return requestPluckTrace(tx, mapping_pcs, rpc_url);
  })
  .compose(flattenSequentially); // returns an array of plucked keys

  const keysSeed = [];
  const keys$ = plucked_keys$.fold((prev_keys, new_keys) => {
    // accumulate keys plucked from all transactions
    return prev_keys.concat(new_keys);
  }, keysSeed);
  //.drop(1) // drop seed

  return keys$;
}





function convertKeysToStorageLocations(mapping_keys_arr, mapping_storage_offset) {

  let mapping_key_p = ethutil.intToBuffer(mapping_storage_offset);
  mapping_key_p = ethutil.setLengthLeft(mapping_key_p, 32);

  let mapping_storage_locations = mapping_keys_arr.map(function(mapping_key_k) {
    let key_k = ethutil.toBuffer('0x' + mapping_key_k);
    key_k = ethutil.setLengthLeft(key_k, 32)

    // mapping storage location decribed http://solidity.readthedocs.io/en/develop/miscellaneous.html#layout-of-state-variables-in-storage
    // > the value corresponding to a mapping key k is located at keccak256(k . p) where . is concatenation.

    let mapping_key_buf = concatTypedArrays(key_k, mapping_key_p);
    let mapping_key_preimage = '0x' + mapping_key_buf.toString('hex');
    let storage_key = ethutil.sha3(mapping_key_preimage);
    storage_key = ethutil.bufferToHex(storage_key);
    //console.log('mapping storage_key:', storage_key);
    return storage_key;
  });

  return mapping_storage_locations;
}
