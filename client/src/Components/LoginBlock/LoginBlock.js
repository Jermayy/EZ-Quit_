import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import './LoginBlock.css'
import { Link } from 'react-router-dom';

export default class LoginBlock extends Component{
render(){
    return(
        <div className="loginBlock">

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
        
                    
         <Link to="/Dashboard"> <Button variant="primary" type="Submit">
            Login
          </Button></Link>
        
        <Link href="/SignUp">Sign Up</Link>
        </Form>
        
           </div> 
    )
}
  
}