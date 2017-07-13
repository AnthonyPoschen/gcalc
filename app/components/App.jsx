import React from 'react';
import { observer } from 'mobx-react';
//import { Grid , Button ,Col , Navbar , NavDropdown , MenuItem , Nav , NavItem} from 'react-bootstrap';
import ButtonZone from './ButtonZone'
import TextZone from './TextZone'
import Divider from "material-ui/Divider"
import Grid from "material-ui/Grid"
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
    var FullWidth = {
      width:'100%',
      maxWidth:'100%'
    }
    return (

      <div style={fullScreen}>
        <Grid container direction="column" align="stretch" gutter={0} style={fullScreen}>
          <Grid item xs={3} style={FullWidth}>
            <TextZone store={this.props.store}/>
            <Divider />
          </Grid>
          <Grid item xs={9} style={FullWidth}>
            <ButtonZone store={this.props.store} style={fullScreen}/>
          </Grid>
          
        </Grid>

      </div>
    );
  }
}