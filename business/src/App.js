import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header.jsx";
import Dashboard from "./components/dashboard.jsx";
import SignupForm from "./components/signup.jsx";
import Login from "./components/login.jsx";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
          </Switch>
          <Redirect to="/"/>
        </Router>
      </div>
    );
  }
}

export default App;
