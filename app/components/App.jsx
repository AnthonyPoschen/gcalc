import React from 'react';
import { observer } from 'mobx-react';
//import { Grid , Button ,Col , Navbar , NavDropdown , MenuItem , Nav , NavItem} from 'react-bootstrap';
import ButtonZone from './ButtonZone'
import TextZone from './TextZone'
import Divider from "material-ui/Divider"
const remote = require('electron').remote;

@observer
export default class App extends React.Component {
  render() {
    const { height, width } = remote.getCurrentWindow().getBounds();
    var fullScreen = {
      height:'100%',
      width:'100%',
      overflow: 'hidden'
    }
    return (

      <div style={fullScreen}>
        <TextZone store={this.props.store}/>
        <Divider />
        <ButtonZone store={this.props.store} style={fullScreen}/>
      </div>
    );
  }
}