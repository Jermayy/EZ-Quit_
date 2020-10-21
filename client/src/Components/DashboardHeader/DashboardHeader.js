import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './DashboardHeader.css';

export default class DashboardHeader extends Component{

render(){

    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Notes">NOTES</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <a href="#notes">LOGOUT</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}
}