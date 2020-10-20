import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignUp } from "./Pages/SignUp";
// import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
    {/* <Login></Login> */}
  <SignUp></SignUp>
    </div>
  );
}


export default App;
