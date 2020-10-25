import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./Pages/SignUp";
import DashboardPage from "./Pages/Dashboard";
import Login from "./Pages/Login";
import NewNote from "./Pages/NewNote";
import NoteList from "./Pages/NoteList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Dashboard" component={DashboardPage} />
        <Route exact path="/NewNote" component={NewNote} />
        <Route exact path="/NoteList" component={NoteList} />
      </Router>
    </div>
  );
}

export default App;
