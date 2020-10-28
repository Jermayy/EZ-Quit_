import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NoteHeader.css";

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const dayjs = require('dayjs');

export default function NoteHeader() {
  const date = JSON.stringify(dayjs().format("DD/MM/YYYY"));
  const dateDisplay = date.replace(/['"]+/g, "");
  const time = JSON.stringify(dayjs().format("hh:mm A"));
  const timeDisplay = time.replace(/['"]+/g, "");

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
      <p className="justify-content-center timeDate">{dateDisplay}</p>
      <p className="justify-content-center timeDate">{timeDisplay}</p>

      <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
          <div onClick={logout}>LOGOUT</div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
