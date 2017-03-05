import {StorageRx} from './storage-rx.js';
import {ABIrx} from './abi-rx.js';
import web3Rx from './web3-rx.js';

//console.log('StorageRx:', StorageRx);
//const storageRx = new StorageRx(WEB3_RPC, WEB3_WEBSOCKET);


const web3RxExport = {
  //decodeStorage: web3Rx.decodeStorage,
  web3Rx: web3Rx,
  StorageRx: StorageRx,
  ABIrx: ABIrx
};

export default web3RxExport;
