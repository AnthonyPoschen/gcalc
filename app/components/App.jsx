import React from 'react';
import { observer } from 'mobx-react';
import { Grid , Button ,Col , Navbar , NavDropdown , MenuItem , Nav , NavItem} from 'react-bootstrap';
import ButtonZone from './ButtonZone'
import TextZone from './TextZone'
const remote = require('electron').remote;

@observer
export default class App extends React.Component {
  render() {
    const { height, width } = remote.getCurrentWindow().getBounds();

    return (

      <div>
        <TextZone store={this.props.store}/>
        <ButtonZone store={this.props.store}/>
      </div>
    );
  }
}