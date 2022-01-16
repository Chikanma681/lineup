import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const SignupForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Store Name</Label>
        <Input type="name" name="name" id="name" placeholder="Store Name" />
      </FormGroup>
      <FormGroup>
        <Label for="description">Store Description</Label>
        <Input
          type="description"
          name="description"
          id="description"
          placeholder="Store Description"
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Store Address</Label>
        <Input
          type="address"
          name="address"
          id="address"
          placeholder="Store Address"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignupForm;
