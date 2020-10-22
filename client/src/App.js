import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewNote } from "./Pages/NewNote";

// import { SignUp } from "./Pages/SignUp";
// import {Dashboard} from "./Pages/Dashboard";
// import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
    {/* <Login></Login> */}
  {/* <SignUp></SignUp> */}
  {/* <Dashboard></Dashboard> */}
  <NewNote></NewNote>
    </div>
  );
}


export default App;
