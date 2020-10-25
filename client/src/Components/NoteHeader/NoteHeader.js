import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./NoteHeader.css";
import { Link } from "react-router-dom";
import moment from "moment";

export default function NoteHeader() {
  let time = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/Dashboard">HOME</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div>{time}</div>
        </Navbar.Text>

        <Navbar.Text>
          <Link to="/">LOGOUT</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
