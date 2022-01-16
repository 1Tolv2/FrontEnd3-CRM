import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CenteredContainer from "../components/CenteredContainer";
import RedText from "../components/RedText"
import H1 from "../components/H1";
import Background from "../components/Background";

export default function UserCreatePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("")
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/auth/users/";
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName: "My Company",
      organisationKind: "0",
    };
    console.log(payload);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => (res.ok ? navigate("/login") : res.json()))
      .then((data) => data ? setResponse(Object.entries(data)[0][1][0]): console.log("no data"))
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
          {response && <RedText>{response}</RedText>}
          <Button gridButton colStart={1} colEnd={3} width="100%">
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
