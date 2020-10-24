import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './DashboardHeader.css';


export default function DashboardHeader () {



    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/NoteList">NOTES</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to="/">LOGOUT</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )

}
