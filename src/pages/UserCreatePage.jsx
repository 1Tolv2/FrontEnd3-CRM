import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CenteredContainer from "../components/CenteredContainer";
import RedText from "../components/RedText"
import H1 from "../components/H1";
import Background from "../components/Background";
import api from "../components/api";

export default function UserCreatePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("")
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName: "My Company",
      organisationKind: "0",
    };
    api.createUser(payload, setErrorResponse, navigate)
  }
  return (
    <Background>
      <CenteredContainer>
        <H1>WorkSpace</H1>
        <h2>Create user</h2>
        <Form small handleOnSubmit={handleOnSubmit}>
          <InputField
            type="text"
            value={firstName}
            id="firstName"
            setValue={setFirstName}
            labelText="First name:"
            required
          /><br/>
          <InputField
            type="text"
            value={lastName}
            id="lastName"
            setValue={setLastName}
            labelText="Surname:"
            required
          /><br/>
          <InputField
            type="text"
            value={email}
            id="email"
            setValue={setEmail}
            labelText="E-mail:"
            title="Enter a valid e-mail adress"
            pattern="^.+@.+\..+$"
            required
          /><br/>
          <InputField
            type="password"
            value={password}
            id="password"
            setValue={setPassword}
            labelText="Password:"
            title="The password must be atleast 8 characters"
            pattern="^.{8,}$"
            required
          />
          {errorResponse && <RedText>{errorResponse}</RedText>}
          <Button gridButton width="100%">
            create
          </Button>
        </Form>
        <p>
          Already a user? <Link to="/login">Click here</Link> to get to the sign in page.
        </p>
      </CenteredContainer>
    </Background>
  );
}
