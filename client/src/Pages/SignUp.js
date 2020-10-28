import React, { Component } from "react";

import SignUpBlock from "../Components/SignUpBlock/SignUpBlock";
import SignUpHeader from "../Components/SignUpHeader/SignUpHeader";

import "./SignUp.css";
export default class SignUp extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="header">
        <SignUpHeader></SignUpHeader>
        </div>
        <div className="signupBlock">
        <SignUpBlock></SignUpBlock>
        </div>
      </div>
    );
  }
}
