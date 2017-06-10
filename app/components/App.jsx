import React from 'react';
import { observer } from 'mobx-react';
const remote = require('electron').remote;

@observer
export default class App extends React.Component {
  render() {
    const { height, width } = remote.getCurrentWindow().getBounds();

    return (
      <div>
        <div>
          {this.props.store.LastSequenceString}
        </div>
        <div>
          {this.props.store.LastSequenceSum}
        </div>
      
      </div>
    );
  }
}