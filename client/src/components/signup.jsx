import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class SignupForm extends Component {
  state ={
    email:"",
    password:"",
    name:"",
    description:"",
    address:""
  }

  handleInputChange = (e) => {
    
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" value={this} placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            value={this.state}
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Store Name</Label>
          <Input type="name" value={} placeholder="Store Name" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Store Description</Label>
          <Input
            type="description"
            value={}
            placeholder="Store Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Store Address</Label>
          <Input
            type="address"
            value={}
            placeholder="Store Address"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SignupForm;
