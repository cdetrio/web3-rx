# web3-rx
Ethereum web3 library based on reactive observables

Web3-rx is a javascript library that provides a [ReactiveX](http://reactivex.io/) API around Ethereum contracts. As an alternative to web3.js, web3-rx uses [reactive programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) patterns (i.e. observables) to simplify the development of front-end UIs for Ethereum DApps.

## The web3-rx and ABIrx concept

Web3-rx turns an Ethereum contract's state into an observable stream, which emits an event on every state change (i.e. on every change to the contract's storage variables). Web3-rx takes the address of an ethereum contract, and watches that contract's storage for changes.

Web3-rx can use the Solidity source code of a contract to generate an enhanced ABI, termed ABIrx, which specifies the storage location offsets of a contract's variables. Web3-rx uses this ABIrx to convert a contract's storage locations into their respective solidity variable names. This enables directly observing any contract storage variable, regardless of whether it is a public variable (which can also be read indirectly through a solidity accessor method) or a private variable (which has no solidity accessor method).

Additionally, ABIrx can use transaction tracing to convert Solidity `mapping` variables into iterable key-value structures. Because the storage locations of `mapping` elements are hashes of the mapping keys, this was previously impossible unless the contract also [records the keys separately in an array](http://ethereum.stackexchange.com/questions/2943/how-to-create-an-iterable-key-value-structure-in-solidity) (otherwise, converting each storage location back into a key for a particular mapping requires knowing the pre-image of a hash). ABIrx gets around this problem by using the Solidity compiler's source code matching feature, which provides tagged assembly output. ABIrx uses this tagged assembly output to construct tracing functions that "pluck" a mapping's keys from transaction traces.

![todomvc-demo-web3-rx](https://cloud.githubusercontent.com/assets/997681/23591968/648bfe82-01c7-11e7-9a70-f0079aabce75.gif)

