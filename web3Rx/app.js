import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'src/component.js';
import {StorageRxComponent} from 'src/storageRxComponent.js';

//import ethutil from 'ethereumjs-util';
import xs from 'xstream'
import _ from 'lodash';

import {StorageRx} from './storage-rx.js';
import web3Rx from './web3-rx.js';



let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(HelloWorld), container);

let storageContainer = document.getElementById('storageContainer');
//let storageComponent = ReactDOM.render(React.createElement(StorageRxComponent, {'BlockNumber': 0}), storageContainer);


const WEB3_WEBSOCKET = "ws://localhost:8546";
const WEB3_RPC = "http://localhost:8545/";

const storageRx = new StorageRx(WEB3_RPC, WEB3_WEBSOCKET);


const CONTRACT_ADDRESS = "0xc6f5a015b199bcd0262838ce929942b926dcb7f4";


const TodosStorage$ = storageRx.watch(CONTRACT_ADDRESS);

// we have our storage-rx module (tracking storage changes and confirmations)
// now for the storageLocation-to-solidityVar module

const TodosModel$ = web3Rx.decodeStorage(TodosStorage$);





/*
TodosStorage$.map(storageObs =>
  ReactDOM.render(React.createElement(StorageRxComponent, storageObs), storageContainer))
*/



TodosModel$.addListener({
  next: function handleNextEvent(storageObs) {
    //console.log('TodosModel$ event:', printObj(storageObs));
    console.log('TodosModel$ event:', storageObs);
    let storageComponent = ReactDOM.render(React.createElement(StorageRxComponent, storageObs), storageContainer);
  },
  error: function handleError(error) {
    console.log('TodosModel$ error:', error);
    // do something with `error`
  },
  complete: function handleCompleted() {
    console.log('TodosModel$ completed.');
    // do something when it completes
  }
});





TodosStorage$.addListener({
  next: function handleNextEvent(storageObs) {
    console.log('TodosStorage$ event:', printObj(storageObs));
    //let storageComponent = ReactDOM.render(React.createElement(StorageRxComponent, storageObs), storageContainer);
  },
  error: function handleError(error) {
    console.log('TodosStorage$ error:', error);
    // do something with `error`
  },
  complete: function handleCompleted() {
    console.log('TodosStorage$ completed.');
    // do something when it completes
  }
});





function printObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
