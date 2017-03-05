import xs from 'xstream';
import {MainWeb3Source} from './MainWeb3Source.js';


export function makeSockDriver(ws_address) {
  // makeSockDriver sets up the websocket connection.
  console.log('makeSockDriver ws_address:', ws_address);
  let sock = null;
  if (typeof ws_address === 'string') {
    sock = new WebSocket(ws_address);
  }

  function sockDriver(outgoing$) {
    // outgoing$ is the driver sink
    // it is used for sending outgoing messages to web3
    //  e.g. send tx, create contract, call contract method, etc.

    sock.onopen = function () {
      console.log('socket onopen.');
      if (outgoing$) {
        outgoing$.addListener({
          next: outgoing => {
            console.log('sending msg outgoing. outgoing:', outgoing);
            sock.send(outgoing);
          },
          error: () => {},
          complete: () => {},
        });
      }
    }


    const root_incoming$ = xs.create({
      start: listener => {
        console.log('root sock listener created.');
        sock.onmessage = function (msg) {
          console.log('received message on root socket. msg:', msg);
          listener.next(msg);
        };
      },
      stop: () => {},
    });

    // MainWeb3Source sets up the web3 subscriptions over the socket
    // default blank namespace []
    let root_namespace = [];
    return new MainWeb3Source(sock, outgoing$, root_incoming$, root_namespace);
  }

  return sockDriver;
}
