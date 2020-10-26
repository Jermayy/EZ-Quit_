import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUp from "./Pages/SignUp";
import DashboardPage from "./Pages/Dashboard";
import Login from "./Pages/Login";
import NewNote from "./Pages/NewNote";
import NoteList from "./Pages/NoteList";

import { StoreProvider } from "./utils/GlobalState";

// --------- Middleware for Passport ------------

// const passport = require('passport');
// const session = require('express-session');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/user');

// app.use(session({
//   name: 'session-id',
//   secret: '123-456-789',
//   saveUninitialized: false,
//   resave: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// -------------------------------------------------

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Dashboard" component={DashboardPage} />
          <Route exact path="/NewNote" component={NewNote} />
          <Route exact path="/NoteList" component={NoteList} />
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
