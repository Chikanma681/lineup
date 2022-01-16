import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Login extends Component {
  state={

  };
  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" value={} placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            value={} 
            placeholder="password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Login;
