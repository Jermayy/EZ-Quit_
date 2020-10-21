import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './DashboardHeader.css';

export class DashboardHeader extends Component{

render(){

    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">EZ-Quit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <a href="#notes">Notes</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}
}