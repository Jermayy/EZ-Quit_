import React, { Component } from "react";

import SignUpBlock from "../Components/SignUpBlock/SignUpBlock";
import SignUpHeader from "../Components/SignUpHeader/SignUpHeader";

export default class SignUp extends Component {
  render() {
    return (
      <div className="Signup">
        <SignUpHeader></SignUpHeader>
        <SignUpBlock></SignUpBlock>
      </div>
    );
  }
}
