import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from "reactstrap"
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h4>
          <Link to="login">
            <Button>Login</Button>
          </Link>or
          <Link to="signup">
            <Button>Signup</Button>
          </Link>
        </h4>
      </div>
    );
  }
}

export default Dashboard;
