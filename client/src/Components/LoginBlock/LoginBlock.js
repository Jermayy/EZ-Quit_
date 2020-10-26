import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginBlock.css";

import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function LoginBlock() {
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const signIn = (event) => {
    event.preventDefault();
    axios.post("/api/users/login", {username: usernameRef.current.value, password: passwordRef.current.value})
    .then(()=>{
      history.push("/Dashboard")
    })
  }

  return (
    <div className="loginBlock">
      <Form onSubmit={signIn}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={usernameRef}/>
          <Form.Text className="text-muted" >
            Enter your email address
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
        </Form.Group>

       
          <Button variant="primary" type="Submit" onClick={signIn}>
            Login
          </Button>
       

        <Link to="/SignUp">Sign Up</Link>
      </Form>
    </div>
  );
}
