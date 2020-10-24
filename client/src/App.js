import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// import { SignUp } from "./Pages/SignUp";
// import {Dashboard} from "./Pages/Dashboard";
// import { Login } from "./Pages/Login";
// import { NewNote } from "./Pages/NewNote";
import {NoteList} from "./Pages/NoteList"

function App() {
  return (
    <div className="App">
    {/* <Login></Login> */}
  {/* <SignUp></SignUp> */}
  {/* <Dashboard></Dashboard> */}
  {/* <NewNote></NewNote> */}
  <NoteList></NoteList>
    </div>
  );
}


export default App;
