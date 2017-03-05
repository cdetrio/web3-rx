import React from 'react'
import { render } from 'react-dom'
//import { createStore, applyMiddleware, compose} from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
//import { createEpicMiddleware } from 'redux-observable'
//import 'rxjs';
import _ from 'lodash'

import Web3 from 'web3';
import Web3Rx from 'web3-rx';
console.log('Web3Rx:', Web3Rx);


const WEB3_RPC = 'http://localhost:8545/'
const WEB3_WEBSOCKET = "ws://localhost:8546";

const web3rxConfig =  {
                        'rpcUrl': WEB3_RPC,
                        'wsUrl': WEB3_WEBSOCKET
                      };

const web3rx = new Web3Rx.web3Rx(web3rxConfig);
console.log('web3rx:', web3rx);

// can also observe storage directly
//const TodosStorage$ = web3rx.StorageRx.watch("0xc6f5a015b199bcd0262838ce929942b926dcb7f4");

// or observe new blocks (i.e. new head events)
const newBlock$ = web3rx.StorageRx.NewHeads$;
// or pending tx's
//const pendingTx$ = web3rx.StorageRx.pendingTx


newBlock$.addListener({
  next: function handleNextEvent(event) {
    console.log('newBlock$ event:', event);
  },
  error: function handleError(error) {
    console.log('newBlock$ error:', error);
    // do something with `error`
  },
  complete: function handleCompleted() {
    console.log('newBlock$ completed.');
    // do something when it completes
  }
});




const CONTRACT_NAME = 'Todos';
const CONTRACT_FILE = 'todos-struct.sol';

import contractAsmAbi from './todos-struct-solc-output.json'
console.log('contractAsmAbi:', contractAsmAbi);

const ABIrxConfig = {
  'contractName': CONTRACT_NAME,
  'contractFile': CONTRACT_FILE,
  'solAsmAbi': contractAsmAbi,
};

const TodosABIrx = new Web3Rx.ABIrx(ABIrxConfig);
const CONTRACT_ADDRESS = "0x7ef36b9c1f693eb6cbbc591b38c286421f4125d5";

// pass in list of tx's from which to parse mapping keys
// TODO: use an index (get all tx's/calls to CONTRACT_ADDRESS) instead of hardcoded list
const TX_LIST = [];
/*
const TX_LIST = ['0xb1d6bd9dd2f2787f299c3795e81b88bae1aa21845448731334478a7f050f1ead',
                '0x62432ce9adfb341d624f7692651fcdd2ecd1b542c9c5ccf8d32055ebf841b590',
                '0x0d13427e7049e712aa3a4903c21f06817a8c15beb106df25a6462aa95a8be0f9',
                '0x1f2d204f2a12c843118833b024944cd0e00eb7bc8eb865540392a9099547eadc'];
*/


// TODO: here is where we should specify the variable name that we want to watch
// (or by default, watch all variables)
const TodosModel$ = web3rx.watch(CONTRACT_ADDRESS, TodosABIrx, TX_LIST)




const store = createStore(reducer);

let todoState = [
  {
    text: 'Use web3rx!',
    completed: false,
    id: 0
  }
];

store.dispatch({ type: 'SET_STATE', state: todoState })


TodosModel$.addListener({
  next: function handleNextEvent(storageObs) {
    console.log('TodosModel$ event:', storageObs);
    let todosAsState = todosState(storageObs);
    console.log('todos state:', todosAsState)

    store.dispatch({ type: 'SET_STATE', state: todosAsState })
  },
  error: function handleError(error) {
    console.log('TodosModel$ error:', error);
  },
  complete: function handleCompleted() {
    console.log('TodosModel$ completed.');
  }
});



function todosState(todosObservable) {
  return _.map(todosObservable, (todo, key) => {
    let confirmations = [todo.title.confirmations,
                        todo.completed.confirmations,
                        todo.id.confirmations];
    console.log('todosState confirmations:', confirmations);
    confirmations = Math.min(...confirmations);
    if (confirmations <= 0) {
      confirmations = "pending";
    } else {
      confirmations = "confirmed";
    }
    console.log('todosState confirmations min:', confirmations);
    return {
      'text': todo.title.value,
      'completed': todo.completed.value,
      'id': todo.id.value,
      'confirmations': confirmations
    };
  });
}




// ***********
// TODO: remove web3 as a dependency
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(WEB3_RPC));
web3.eth.defaultAccount = "0x6430701987fdd4efb01d9aeeab7d2c8cae1807ba";
console.log('web3.eth.accounts:', web3.eth.accounts);

window.web3 = web3;


var TodosABI = JSON.parse(contractAsmAbi.contracts['Todos'].abi);
var TodosContract = web3.eth.contract(TodosABI);
var TodosInstance = TodosContract.at(CONTRACT_ADDRESS);
console.log('index.js TodosInstance:', TodosInstance);

window.TodosInstance = TodosInstance;





render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
