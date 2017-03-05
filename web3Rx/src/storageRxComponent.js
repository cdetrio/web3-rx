import React from 'react';
import _ from 'lodash';

export class StorageRxComponent extends React.Component {
  render() {
    //console.log('React StorageRxComponent this.props:', this.props);


    //return React.createElement('h1', null, 'Hello World');
    let propsToNodes = function(props) {
      return _.map(props, function(value, key) {
        //return (<div>{key} : {value}</div>);
        let keyNode = React.createElement('span', null, key + ' : ');
        if (_.isObject(value)) {
          //return propsToNodes(value);
          let sub_nodes = propsToNodes(value);
          let classval = '';
          if (key !== 'storageObject') classval = 'storageSlot';

          return React.createElement('div', {'key':key, className:classval},
                  keyNode, sub_nodes);

        } else {
          let valueNode = React.createElement('span', null, value.toString());
          //return React.createElement('div', {'key':key}, key + ' : ' + value);
          return React.createElement('div', {'key':key},
            keyNode, valueNode);
        }
      });
    };

    let propNodes = propsToNodes(this.props);
    //console.log('propNodes:', propNodes);

    //return (<div>{propNodes}</div>);
    return React.createElement('div', null, propNodes);
  }
}
