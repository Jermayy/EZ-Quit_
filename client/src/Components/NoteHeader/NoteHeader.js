import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NoteHeader.css';
import { Link } from 'react-router-dom';
export default class NoteHeader extends Component{

render(){

    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Dashboard">HOME</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to="/">LOGOUT</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}
}