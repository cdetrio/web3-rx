import xs from 'xstream';
//import evm from 'ethereumjs-vm';
//import {getTxSummary} from './get-tx-summary.js';



function getTxByHash(tx_hash) {
  const req_obj = {
    jsonrpc: "2.0",
    method: "eth_getTransactionByHash",
    params: [tx_hash],
    id:11
  };

  let fetch_prom = function() {
    var prom_res =
      fetch('http://localhost:8545/', {
        method: 'POST',
        body: JSON.stringify(req_obj)
      })
      .then(function(response) {
        return response.json();
      });
    return prom_res;
  };

  let res$ = xs.fromPromise(fetch_prom())
    .map(res => {
      console.log('getTxByHash xs map res:', res);
      return res;
    });

  return res$;
}



export class MainWeb3Source {
  constructor(sock, outgoing$, root_incoming$, namespace) {
    this._sock = sock;
    this._outgoing$ = outgoing$;
    this._root_incoming$ = root_incoming$;
    this._namespace = namespace;
    this._subscription_id = null; // jsonrpc id, to match messages with subscriptions
    console.log('MainWeb3Source constructor sock:', sock);
  }

  getSubscriptionId() {
    return this._subscription_id;
  }


  select(selector) {
    const child_namespace = this._namespace.concat(selector);

    return new MainWeb3Source(this._sock, this._outgoing$, this._root_incoming$, child_namespace);
  }


  events(event_type) {
    let self = this;
    let parent_namespace = this._namespace.slice(-1)[0];
    console.log('MainWeb3Source events parent_namespace:', parent_namespace);

    const NEW_BLOCK_SUB_ID = 1;
    const PENDING_TX_ID = 2;
    //const newBlockSubscription = JSON.stringify({"id": NEW_BLOCK_SUB_ID, "method": "eth_subscribe", "params": ["newBlocks", {}]});
    const newBlockSubscription = JSON.stringify({"id": NEW_BLOCK_SUB_ID, "method": "eth_subscribe", "params": ["newHeads", {}]});
    const pendingTxSubscription = JSON.stringify({"id": PENDING_TX_ID, "method": "eth_subscribe", "params": ["newPendingTransactions", {}]});


    function createEventSubscription(sub_id) {
      let subscription_watch_listener = {};
      subscription_watch_listener = {
        next: (msg) => {
          /*
          if (data === undefined) {
            console.log('subscription_watch_listener received data undefined.');
            return;
          }
          */
          console.log('The root Stream gave me msg:', msg);
          let data = JSON.parse(msg.data);
          if (data.id === sub_id) {
            console.log('got eth_subscription. setting self._subscription_id');
            self._subscription_id = data.result;
            // removeListener will stop the stream producer
            self._root_incoming$.removeListener(subscription_watch_listener);
          }
        },
        error: (err) => {
          console.error('The root Stream gave me an error: ', err);
        },
        complete: () => {
          console.log('The root Stream told me it is done.');
        },
      };


      self._root_incoming$.addListener(subscription_watch_listener);
    }



    if (parent_namespace === "blocks" && event_type === "new") {
      console.log('subscribing to new blocks.');

      // not sure whether to send messages using sock or $outgoing
      // must delay or else will send before sock has received onopen
      setTimeout(function() {
        self._sock.send(newBlockSubscription);
      }, 500);

      createEventSubscription(NEW_BLOCK_SUB_ID);

      const newBlockEvent$ =
        self._root_incoming$
          .map(msg => JSON.parse(msg.data))
          .filter(data => data.method === "eth_subscription")
          //.filter(self.getSubscriptionId() !== null)
          //.debug()
          .filter(data => data.params)
          .filter(data => data.params.subscription === self.getSubscriptionId())
          .map(data => data.params.result);

      return newBlockEvent$;
    }



    if (parent_namespace === "txs" && event_type == "pending") {
      setTimeout(function() {
        self._sock.send(pendingTxSubscription);
      }, 500);

      createEventSubscription(PENDING_TX_ID);

      const pendingTxHash$ =
        self._root_incoming$
          .map(msg => JSON.parse(msg.data))
          .filter(data => data.method === "eth_subscription")
          //.filter(self.getSubscriptionId() !== null)
          .debug() // debug seems to prevent a problem with data.params being undefined
          .filter(data => data.params)
          .filter(data => data.params.subscription === self.getSubscriptionId())
          .map(data => data.params.result);
          // here we do tx specific logic
          // instead of returning just the tx hash, we do getTransaction(hash)
          // and return that result
          // tx_hash = data.params.result
          //let txDetails$ = getTxByHash(tx_hash);
          // xs.fromPromise()
      //return pendingTxHash$; // streams only the tx hash

      const pendingTx$ =
        pendingTxHash$.map(txHash => {
          return getTxByHash(txHash); // returns a stream
        }).flatten()
        .map(data => {
          const tx = data.result;
          // if tx.to is null, then its a create contract tx (confirm?)
          // should be able to get pending contract deployment address
          console.log('pendingTx$ getTxByHash tx after flatten:', tx);

          //console.log('getting tx summary.');
          //return getTxSummary(tx.hash) then flatten

          return tx;
        })

      return pendingTx$;
    }


    return this._root_incoming$;
  }


}
