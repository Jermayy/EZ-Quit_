import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NoteHeader.css';

export default class NoteHeader extends Component{

render(){

    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Home">HOME</Navbar.Brand>
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