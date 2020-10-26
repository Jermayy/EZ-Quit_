import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./NoteHeader.css";
import { Link } from "react-router-dom";
import moment from "moment";

import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function NoteHeader() {
  let time = moment().format("MMMM Do YYYY, h:mm:ss a");

  const history = useHistory();

  const logout = (event) =>{
    event.preventDefault();
    axios.get("/api/users/logout").then(
      ()=>{
        history.push("/")
      }
    )
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/Dashboard">HOME</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <div>{time}</div>
        </Navbar.Text>

        <Navbar.Text>
          <div onClick={logout}>LOGOUT</div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
