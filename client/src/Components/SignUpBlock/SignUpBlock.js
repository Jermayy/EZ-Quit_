import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./SignUpBlock.css";

export class SignUpBlock extends Component {
  render() {
    return (
      <div className="SignUpBlock">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Enter your email address
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="Submit">
            Register
          </Button>

          <Link to="/">Back to login</Link>
        </Form>
      </div>
    );
  }
}
