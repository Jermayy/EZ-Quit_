import React, { Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'

export class SignUpHeader extends Component {
render(){
    return(
        <Navbar>
  <Navbar.Brand href="#home">EZ-Quit</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
     <a href="#login">Sign Up</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
}
}