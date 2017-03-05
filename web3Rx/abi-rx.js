'use strict'

import RecursiveIterator from 'recursive-iterator';
import _ from 'lodash';

import varUtil from './variable.js'
import contractsUtil from './contracts.js'
import decoder from './stateDecoder.js'

import ethutil from 'ethereumjs-util';
const BN = ethutil.BN;


// abiRx started as a solc patch that returns solidity variable storageOffsets
// and byteOffsets. but the solc patch is redundant now, since the same
// functionality is done in https://github.com/ethereum/remix/pull/104
//const abiRx = JSON.parse(contractSolcObj.contracts[CONTRACT_NAME].abiRx);


// TODO: the source mappings in todos-struct-solc-output.json are customized
// {"begin":677,"end":690,"name":"ADD","source":"TaskList[_id]"}
// standard solc output only has "begin" and "end".
// the customization here is the "source" field, which contains the solidity
// source from "begin" to "end"


export class ABIrx {

  constructor(config) {
    const self = this;
    this.CONTRACT_NAME =  config.contractName;
    this.CONTRACT_FILE = config.contractFile;
    this.SOL_ASM_ABI = config.solAsmAbi;

    const stateDeclarations = contractsUtil.getStateDefinition(self.SOL_ASM_ABI['sources'], self.CONTRACT_NAME);
    this.StateDeclarations = stateDeclarations;

    const mappingKeyNames = parseMappingKeyNames(self.SOL_ASM_ABI['sources'][self.CONTRACT_FILE]);
    // mappingKeyNames: [ { mapping_name: 'TaskList', key_name: 'id' },
    //  { mapping_name: 'TaskList', key_name: '_id' } ]

    const taggedAsm = prepareContractAsm(self.SOL_ASM_ABI['contracts'][self.CONTRACT_NAME]['asm'], 'runtimeOnly');
    const mappingKeyBreakpoints = findBreakpointsFromKeyNames(mappingKeyNames, taggedAsm);
    console.log('mappingKeyBreakpoints:', mappingKeyBreakpoints);

    this.mappingKeyBreakpoints = mappingKeyBreakpoints;

  }



  decodeStorageMappings(storage_key_locations, storage_obj, state_declaration_index) {
    const self = this;
    /*
    // the original decoder.decodeStruct() expected storage object with key-values formatted like '0xkey':'0xdeadbeef'
    storage_obj: {
      '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a6': '0x6e756d2032207461736b20746f646f000000000000000000000000000000001e',
      '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a7': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
      '0x3fb53154734cd18f56721d3b645a64a067eb5a39bc23fa814836a6948b08e2a8': '0x354ce76e567f2233bd45002c3b495238d12f475a76802d9cdca0d2a209908441',
      '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32a': '0x666972737420636f6e6372657465207461736b20746f646f0000000000000030',
      '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32b': '0x00000000000000000000006430701987fdd4efb01d9aeeab7d2c8cae1807ba00',
      '0xd8b6389e4f29bb956579f3a5beffce11e08ad93a78f9cfa5737403ff9e2fa32c': '0x4186c2ed2f75849d809eec9f94ef1faffc89fadfe26b1c405aeee1bdfc73f963' }

    // but our storage object also has confirmations attached by storageRx, and
    // looks like: '0xkey': {'value':'0xdeadbeef', 'confirmations':3}

    // so decoder.decodeStruct() now has an ugly patch
    */


    // state_declaration_index is the solidity variable corresponding to the storage key we want to decode
    // state_declaration_index = 1 means it is the second declared variable in the contract code
    // TODO: fix this workaround. see expanded comment "todo: generalize struct_type"
    const structType = varUtil.getType(self.StateDeclarations[state_declaration_index], self.StateDeclarations);

    // can only decode storage locations for which we know the mapping keys
    const known_storage_key_locations =
      storage_key_locations.filter(key_loc => _.has(storage_obj, key_loc));

    let structs_decoded = known_storage_key_locations.map(function(key_location) {
      let mapping_key_location = new BN(key_location.replace('0x', ''), 16);
      let struct_location = {'slot': mapping_key_location, 'offset':0}; // TODO: offset should come from ABIrx
      let struct_val_decoded = decoder.decodeStruct(structType, storage_obj, struct_location);
      return [key_location, struct_val_decoded];
    });

    let storage_decoded = _.fromPairs(structs_decoded);
    return storage_decoded;
  }


}





function parseMappingKeyNames(ast) {
  let mapKeys = [];

  for(let item of new RecursiveIterator(ast)) {
    if (item.node) {
      if (item.node.name == "IndexAccess") {
        let map_key = {};
        map_key['mapping_name'] = item.node.children[0].attributes.value;
        map_key['key_name'] = item.node.children[1].attributes.value;
        // key_name may be a constant literal, or a solidity variable name

        // key_name may appear in multiple AST nodes. don't need duplicates..
        if (_.some(mapKeys, map_key) == false) {
          mapKeys.push(map_key);
        }
        // if the same key_name is used in multiple places (i.e. same key
        // name is used in different contract methods), we do want to pluck
        // it everywhere it appears. findMappingKeyBreakpoints will pluck it everywhere

      }
    }
  }

  return mapKeys;
}




function findBreakpointsFromKeyNames(mapping_key_names, formatted_asm) {

  let map_key_pcs = mapping_key_names.map(function(mapKey) {
    let key_pcs = findMappingKeyBreakpoints(formatted_asm, mapKey['key_name']);
    let key = {
      'mappingName': mapKey['mapping_name'],
      'keyName': mapKey['key_name'],
      'keyPCs': key_pcs
    };
    return key;
  });
  console.log('mappings, keys, and their breakpoints:', map_key_pcs);
  /*
  map_key_pcs: [ { mappingName: 'TaskList',
      keyName: 'id',
      keyPCs: [ 627, 898, 910 ] },
    { mappingName: 'TaskList',
      keyName: '_id',
      keyPCs: [ 361, 933, 991 ] } ]
  */

  let mapkey_pcs = _.groupBy(map_key_pcs, mkpc => mkpc.mappingName);
  /*
  grouped mapkey_pcs: { TaskList:
     [ { mappingName: 'TaskList', keyName: 'id', keyPCs: [Object] },
       { mappingName: 'TaskList', keyName: '_id', keyPCs: [Object] } ] }
  */

  // we don't care about the keyNames anymore, we only used them to get the PCs
  // so collapse the groups, we'll just have a mapping's name its PCs
  let mapping_pcs = [];
  _.forEach(mapkey_pcs, function(mkpcs, mappingName) {
    let mapping = {};
    mapping.mappingName = mappingName;
    mapping.keyPCs = mkpcs.reduce((memo, pcs) => {
      return memo.concat(pcs.keyPCs);
    }, []);
    mapping_pcs.push(mapping);
  });

  return mapping_pcs;
}



// use solidity source mappings (tagged assembly) to find the program counters
// (PCs, i.e. breakpoints) at which we can pluck a mapping key from the stack
function findMappingKeyBreakpoints(asm, map_key) {
  let key_asm_lines = _.filter(asm, function(o) { return o[2] == map_key; });
  console.log('filter key_asm_lines:', key_asm_lines);
  //filter key_asm_lines: [ [ 627, 'DUP4 ', 'id' ], [ 898, 'DUP2 ', 'id' ], [ 910, 'DUP2 ', 'id' ] ]

  // mapping keys tend to be found at a DUP opcode
  // it is easier pluck at DUP pc + 1 (eg. 109 + 1 = 110) because
  // on the op after the DUP, the value is at the top of the stack

  let pluck_pcs = key_asm_lines.map(key_pc => key_pc[0] + 1);
  return pluck_pcs;
}





// 'fullDeployment' param returns the asm of the deployment tx
// deployment tx includes the bytecode of the constract constructor

// 'runtimeOnly' param returns the asm of the deployed code
// (does not include the contract constructor bytecode)

// prepareContractAsm returns the EVM assembly code with PC (program counter) at
// each opcode, and also its solidity source mapping
function prepareContractAsm(asm_obj, full_or_runtime) {
  const constructor_asm = asm_obj['.code']; // fullDeployment asm
  const runtime_asm = asm_obj['.data'][0]['.code']; // runtimeOnly asm

  const constructor_instruction_size = getConstructorInstructionSize(constructor_asm);
  const constructor_instruction_size_bytes = Number(constructor_instruction_size).toString(16);
  // constructor_instruction_size is the size (in bytes) of the constructor
  // instructions. it is smaller than total_constructor_size_bytes (the size of
  // the constructor bytecode in the actual deployment tx), because
  // total_constructor_size_bytes includes additional bytes that specify the
  // runtime size and the constructor size.
  const runtime_size = getRuntimeSize(runtime_asm);
  const runtime_size_bytes = Number(runtime_size).toString(16);
  const runtime_size_holder = Math.ceil(runtime_size_bytes.length / 2);

  // runtime size and constructor size are values within the constructor bytecode
  // the constructor is executed in the deployment tx, and these values are used
  // as offsets where the EVM finds the start and end of the runtime bytecode
  // (the runtime bytecode is what is actually deployed to the contract address)
  // the runtime bytecode starts where the constructor bytecode ends (i.e. at
  // the offset total_constructor_size_bytes), and the runtime bytecode ends
  // at (total_constructor_size_bytes + runtime size).
  //          deployment bytecode:  [constructor bytecode][runtime bytecode]
  // total_constructor_size_bytes:  |____________________|
  //           runtime_size_bytes:                        |________________|

  const constructor_size_holder = 1 + 1; // '00' + '8f'
  // total_constructor_size_bytes was '8f'. not sure why the extra 00 was in the deployment tx bytecode?
  const total_constructor_size_bytes = Number(constructor_instruction_size + runtime_size_holder + constructor_size_holder).toString(16);


  let asm_code = runtime_asm;
  if (full_or_runtime === 'fullDeployment') {
    // option to include constructor asm. useful for plucking mapping keys
    // set in contract constructor (i.e. in the deployment tx)
    asm_code = constructor_asm.concat(runtime_asm);
  }
  if (full_or_runtime === 'runtimeOnly') {
    // only pluck keys set in contract methods. sufficient to find keys in any
    // tx other than the deployment tx
    asm_code = runtime_asm;
  }


  let pc = 0;
  let formatted_asm = asm_code.filter(function(op) { return op.name !== 'tag'; }).map(function(op) {
    let op_pc = pc;
    let op_val = '';
    pc = pc + 1;
    if (op.name == "PUSH #[$]") {
      // need runtime size.
      op_val = runtime_size_bytes;
      pc = pc + Math.ceil(op_val.length / 2);
    }
    else if (op.name == "PUSH [$]") {
      // need the constructor size
      op_val = '00' + total_constructor_size_bytes; // not sure why the extra 00 in the deployment tx bytecode??
      pc = pc + Math.ceil(op_val.length / 2);
    }
    else if (op.name == "PUSH [tag]") {
      pc = pc + 2;
    }
    else if (op.value) {
      op_val = op.value;
      pc = pc + Math.ceil(op.value.length / 2);
    }

    return [op_pc, op.name + ' ' + op_val, op.source];
  });


  return formatted_asm;
}


function getConstructorInstructionSize(constructor_asm) {


  return constructor_asm.filter(function(op) { return op.name !== 'tag'; }).reduce(function(memo, op) {
    let pc = 1;
    let op_val = '';
    // the contract constructor bytecode includes both the constructor size, and
    // the runtime size. these values aren't provided in solc's asm output, but
    // they are there in the bytecode of the deployment tx. since we are only
    // working from the asm, we don't have them yet (but will account for them later)
    if (op.name == "PUSH [$]") {
      // op.value here will be the constructor size
    }
    else if (op.name == "PUSH #[$]") {
      // when executed, op.value here will be the runtime size.
    }
    else if (op.value) {
      op_val = op.value;
      pc = pc + Math.ceil(op.value.length / 2);
    }

    //return [pc, op.name + ' ' + op_val, op.source];
    return pc + memo;
  }, 0);
}


function getRuntimeSize(runtime_asm) {
  return runtime_asm.filter(function(op) { return op.name !== 'tag'; }).reduce(function(memo, op) {
    let pc = 1; // instruction is the first byte
    if (op.value) {
      pc = pc + Math.ceil(op.value.length / 2);
    }
    return pc + memo;
  }, 0);
}



// TODO: fix `itemTask` workaround.
// we need to get the "type" object of the Task struct, but varUtil.getType()
// doesn't work on a StructDefinition, and it also doesn't work on the TaskList
// mapping. for now we've declared a Task struct dummy variable `itemTask` in
// the todos-struct.sol code, solely so we can use varUtil.getType() to get
// the type object for our Task struct.

//const STATE_DECLARATIONS = contractsUtil.getStateDefinition(contractSolcObj.sources, CONTRACT_NAME);
//console.log('STATE_DECLARATIONS:', STATE_DECLARATIONS);
/* STATE_DECLARATIONS:
[ { attributes: { name: 'Task' },
    children: [ [Object], [Object], [Object], [Object] ],
    id: 140468288501336,
    name: 'StructDefinition',
    src: '22:108:0' },
  { attributes: { name: 'itemTask', type: 'struct Task storage ref' },
    children: [ [Object] ],
    id: 140468287447976,
    name: 'VariableDeclaration',
    src: '136:13:0' },
  { attributes:
     { name: 'TaskList',
       type: 'mapping(bytes32 => struct Task storage ref)' },
    children: [ [Object] ],
    id: 140468287448504,
    name: 'VariableDeclaration',
    src: '156:33:0' },
  { attributes: { constant: false, name: 'addTask', public: true },
    children: [ [Object], [Object], [Object] ],
    id: 140468287449816,
    name: 'FunctionDefinition',
    src: '196:282:0' },
  { attributes: { constant: false, name: 'setTaskCompleted', public: true },
    children: [ [Object], [Object], [Object] ],
    id: 140468287451816,
    name: 'FunctionDefinition',
    src: '484:122:0' },
  { attributes: { constant: false, name: 'editTaskTitle', public: true },
    children: [ [Object], [Object], [Object] ],
    id: 140468287453880,
    name: 'FunctionDefinition',
    src: '612:103:0' },
  { attributes: { constant: false, name: 'deleteTask', public: true },
    children: [ [Object], [Object], [Object] ],
    id: 140468287455240,
    name: 'FunctionDefinition',
    src: '721:70:0' } ]
*/



// TODO: generalize struct_type.
// for now STRUCT_TYPE is hardcoded for Task struct in todos-struct.sol
//const STRUCT_TYPE = varUtil.getType(STATE_DECLARATIONS[1], STATE_DECLARATIONS);
//console.log('struct_type:', struct_type);
/*
struct_type: { originalType: 'struct Task storage ref',
  innerType: 'struct Task',
  size: 'unapplicable',
  memSize: 'unapplicable',
  dim: [],
  members:
   [ { name: 'title', type: [Object], location: [Object] },
     { name: 'completed', type: [Object], location: [Object] },
     { name: 'owner', type: [Object], location: [Object] },
     { name: 'id', type: [Object], location: [Object] } ],
  slotsUsed: 1,
  membersSlotsUsed: 3,
  isStruct: true }
*/
//console.log('struct_type.members:', struct_type.members);
/*
struct_type.members: [ { name: 'title',
    type:
     { originalType: 'string storage pointer',
       innerType: 'string',
       size: 'dynamic',
       memSize: 'dynamic',
       dim: [],
       slotsUsed: 1 },
    location: { slot: 0, offset: 0 } },
  { name: 'completed',
    type:
     { originalType: 'bool',
       innerType: 'bool',
       size: 8,
       memSize: 2,
       dim: [],
       slotsUsed: 1 },
    location: { slot: 1, offset: 0 } },
  { name: 'owner',
    type:
     { originalType: 'address',
       innerType: 'address',
       size: 160,
       memSize: 40,
       dim: [],
       slotsUsed: 1 },
    location: { slot: 1, offset: 2 } },
  { name: 'id',
    type:
     { originalType: 'bytes32',
       innerType: 'bytes',
       size: 256,
       memSize: 64,
       dim: [],
       isBytes: true,
       slotsUsed: 1 },
    location: { slot: 2, offset: 0 } } ]
*/
