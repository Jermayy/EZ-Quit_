import React, { Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

export default class SignUpHeader extends Component {
render(){
    return(
        <Navbar>
  <Navbar.Brand href="/">EZ-Quit</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
   
   
    <Navbar.Text>
     <Link to="/SignUp">Sign Up</Link>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
}
}