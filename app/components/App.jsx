import React from 'react';
import { observer } from 'mobx-react';
import { Button , Navbar , NavDropdown , MenuItem , Nav , NavItem} from 'react-bootstrap';
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
        <Button bsStyle="success" bsSize="large" active>Test Button!</Button>
        <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
      </div>
    );
  }
}