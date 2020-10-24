import React, { Component } from 'react';
import LoginBlock from '../Components/LoginBlock/LoginBlock'
import LoginTitle from '../Components/LoginTitle/LoginTitle'
import './Login.css'



export default class Login extends Component{
    
    render(){
    
    return(
<div className="Login">
  <div className="LoginTitle">
  <LoginTitle></LoginTitle>
  </div>

  <div className="LoginBlock"></div>
  <LoginBlock></LoginBlock>
  </div>

    )
}
}