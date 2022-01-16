import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class SignupForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    description: "",
    address: "",
    capacity: "",
  };

  handleInputChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.value)

    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state.password,"STATE")
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://lineupapp.firebaseapp.com/api/register`;

    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      description: this.state.description,
      address: this.state.address,
      capacity: this.state.capacity,
    };

    axios.post(url, body).then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };
  
  componentDidMount() {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInputChange}
            placeholder="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Store Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            onChange={this.handleInputChange}
            placeholder="Store Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Store Description</Label>
          <Input
            type="description"
            name="description"
            id="description"
            onChange={this.handleInputChange}
            placeholder="Store Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Store Address</Label>
          <Input
            type="address"
            name="address"
            id="address"
            onChange={this.handleInputChange}
            placeholder="Store Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="capacity">Store Capacity</Label>
          <Input
            type="capacity"
            name="capacity"
            id="capacity"
            onChange={this.handleInputChange}
            placeholder="Store Capacity"
          />
        </FormGroup>
        <Button onSubmit={this.handleInputChange}>Submit</Button>
      </Form>
    );
  }
}

export default SignupForm;
