import ethutil from 'ethereumjs-util';
import xs from 'xstream'
import {makeSockDriver} from './sock-driver.js';
import _ from 'lodash';

/*
// ***************
// this depends on an eth_getStorageObject rpc method.
// the eth_getStorageObject method was implemented in a geth patch
// now the same functionality is availabe in experimental method, debug_storageRangeAt


the eth_getStorageObject rpc method should return a storage object like this:
storage_obj: {
  '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e',
  '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
  '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a8': '0x354ce76e567f2233bd45002c3b495238d12f475a76802d9cdca0d2a209908441',
  '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32a': '0x666972737420636f6e6372657465207461736b20746f646f0000000000000030',
  '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32b': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
  '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32c': '0x4186c2ed2f75849d809eec9f94ef1faffc89fadfe26b1c405aeee1bdfc73f963' }

storageRx transforms storage_obj, adding a 'confirmations' property to each storage key, like this:
storageObservable.storageObject: {
  '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6':
    {'value': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e', 'confirmations': '6'},
  '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7':
    {'value': 0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00', 'confirmations': '7'},
    ...
}

// TODO: use better schema / object structure for tracking confirmations (one that doesn't interfere with the storage decoder)
*/





export class StorageRx {

  constructor(rpc_url, ws_url) {
    console.log('storageRx constructor.');
    this._ws_url = ws_url;
    this.RPC_URL = rpc_url;

    this._wsDriver = makeSockDriver(ws_url)();
    console.log('wsDriver:', this._wsDriver);

    this.NewHeads$ = this._wsDriver.select('blocks').events('new');
    this.PendingTx$ = this._wsDriver.select('txs').events('pending');
  }



  getStorageObject(contract_address, block_num) {
    const self = this;

    const req_obj = {
      jsonrpc: "2.0",
      method: "eth_getStorageObject",
      params: [contract_address, block_num],
      id:11
    };

    let fetch_prom = function() {
      let prom_res =
        fetch(self.RPC_URL, {
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
        console.log('getStorageObject xs map res:', res);
        return res.result;
      });

    return res$;
  }




  watch(contract_address) {
    console.log('storageRx watching contract address:', contract_address);
    const self = this;

    const newHeadStorage$ = self.NewHeads$.map(block => {
      let head_num = ethutil.toBuffer(block.number);
      return self.getStorageObject(contract_address, ethutil.bufferToInt(head_num)); // returns a stream
    }).flatten();


    const newPendingStorage$ = self.PendingTx$.map(pendingTx => {
      console.log('got pendingTx:', pendingTx);
      return pendingTx;
    }).filter(pendingTx => pendingTx.to === contract_address)
    .map(pendingTx => {
      // pending storage should reflect changes from the pending tx
      return self.getStorageObject(contract_address, 'pending');
    }).flatten()
    .map(pendingStorage => {
      console.log('got pendingStorage obj:', pendingStorage);
      pendingStorage.blockNumber = -1;
      return pendingStorage;
    });


    const startingStorage$ = self.getStorageObject(contract_address, 'latest');
    const headStorage$ = xs.merge(newHeadStorage$, startingStorage$);
    const storage$ = xs.merge(headStorage$, newPendingStorage$);


    const seedStorageObj = {
      'stateRoot': "0x00",
      'storageObject': {}
    };

    const storageObservable$ =
      storage$.fold((prev_storage, new_storage) => {
      //console.log('prev_storage:', printObj(prev_storage));
      //console.log('new_storage:', printObj(new_storage));

      // on a pendingStorage, new_storage.blockNumber = -1?
      let pending = false;
      if (new_storage.blockNumber === -1) {
        pending = true;
      }

      const increment_by = new_storage.blockNumber - prev_storage.blockNumber;

      if ((new_storage.stateRoot === prev_storage.stateRoot) && (pending == false)) {
        // nothing changed, increment all confirmations
        let storageObs = incrementConfirmations(prev_storage, increment_by);
        storageObs.blockNumber = new_storage.blockNumber;
        return storageObs;
      } else if (prev_storage.stateRoot == "0x00") {
        //console.log('prev_storage.stateRoot is undefined! initializing');
        // initialization
        return initStorageTracking(_.cloneDeep(new_storage));
      } else {
        // state root is different
        let add_confirms = increment_by;
        if (pending) {
          //console.log('pending is true.');
          add_confirms = 0;
        }
        let storageObs = findChanges(prev_storage, _.cloneDeep(new_storage), add_confirms);
        //console.log('findChanges returned storageObs:', printObj(storageObs));
        storageObs.stateRoot = new_storage.stateRoot;
        if (pending)
          storageObs.blockNumber = prev_storage.blockNumber;
        return storageObs;
      }

      console.log('Pending tx event, but storage is unchanged. sending prev_storage.');
      return prev_storage;
    }, seedStorageObj)
    .drop(1);


    return storageObservable$;
  } // close watch()


}







function incrementConfirmations(storage, add_confirms) {
  let storage_obj = storage.storageObject;
  _.each(storage_obj, function(value, key) {
    if (storage_obj[key].confirmations === 0) {
      storage_obj[key].confirmations = 1; // confirm after pending
    } else {
      storage_obj[key].confirmations = storage_obj[key].confirmations + add_confirms;
    }
  });
  storage.storageObject = storage_obj;
  return storage;
}


function findChanges(prev_storage, new_storage, add_confirms) {
  //console.log('findChanges prev_storage:', printObj(prev_storage));
  //console.log('findChanges new_storage:', printObj(new_storage));
  let prev_storage_obj = prev_storage.storageObject;
  let new_storage_obj = new_storage.storageObject;
  let storageObservable = {};
  _.each(new_storage_obj, function(value, key) {
    if (_.isUndefined(prev_storage_obj[key]) || (prev_storage_obj[key]['value'] !== new_storage_obj[key])) {
    //if (prev_storage_obj[key]['value'] !== new_storage_obj[key]) {
      // for keys which changed or are new, set confirmations to 0 (pending) or 1 (new block)
      storageObservable[key] = {};
      storageObservable[key]['value'] = new_storage_obj[key];
      storageObservable[key]['confirmations'] = add_confirms;
    } else {
      // increment confirmations for keys which stayed the same
      storageObservable[key] = prev_storage_obj[key];
      storageObservable[key]['confirmations'] = prev_storage_obj[key]['confirmations'] + add_confirms;
    }
  });

  new_storage.storageObject = storageObservable;
  return new_storage;
}


function initStorageTracking(storage) {
  let storage_obj = storage.storageObject;
  let storage_tracking = {};
  _.each(storage_obj, function(value, key) {
    if (_.has(storage_obj[key], 'value') == false) {
      // key is newly added, i.e. pending
      storage_tracking[key] = {};
      //storage_tracking[key]['value'] = value;
      storage_tracking[key]['value'] = storage_obj[key];
      storage_tracking[key]['confirmations'] = 1;
    } else {
      storage_tracking[key] = storage_obj[key];
    }
  });

  storage.storageObject = storage_tracking;
  return storage;
}


function printObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
