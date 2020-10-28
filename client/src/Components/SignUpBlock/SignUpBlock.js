import React,{useRef} from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./SignUpBlock.css";

import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function SignUpBlock () {
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const signUp = (event) => {
    event.preventDefault();
    axios.post("/api/users/signup", {username: usernameRef.current.value, password: passwordRef.current.value})
    .then(()=>{
      history.push("/")
    })
  }


    return (
      <div className="SignUpBlock">
        <Form onSubmit={signUp}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={usernameRef} />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password"ref={passwordRef} />
          </Form.Group>

          <Button variant="dark" type="Submit" onClick={signUp}>
            Register
          </Button>
          <div className="backToLogin">
          <Link to="/">
            <p className="backtologinLink">Back to login</p>
            </Link>
          </div>
        </Form>
      </div>
    );
  }

