import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './LoginTitle.css';


export default class LoginTitle extends Component {

    render(){
        return(
<Jumbotron fluid>
  <Container>
    <h1>EZ-Quit</h1>
    <p>
      Ease your way to smoking less
    </p>
  </Container>
</Jumbotron>
            
        )
    }
}