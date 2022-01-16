import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import api from "../components/api";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CenteredContainer from "../components/CenteredContainer";
import H1 from "../components/H1";
import RedText from "../components/RedText";
import Background from "../components/Background";

export default function LoginPage() {
  const [errorResponse, setErrorResponse] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.search !== "") {
      api.activateUser(location.search, setErrorResponse, navigate)
    }
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { email, password };
    api.loginUser(payload, setErrorResponse, navigate)
  }
  return (
    <Background>
      <CenteredContainer>
        <H1>WorkSpace</H1>
        <Form small handleOnSubmit={handleOnSubmit}>
          <InputField
            type="text"
            value={email}
            id="email"
            setValue={setEmail}
            labelText="E-mail:"
            required
          /><br/>
          <InputField
            type="password"
            value={password}
            id="password"
            setValue={setPassword}
            labelText="Password:"
            required
          />
          {errorResponse && <RedText>Incorrect e-mail or password provided. Please try again.</RedText>}
          <Button gridButton width="100%">
            Sign in
          </Button>
        </Form>
        <p>
          Don't have an account? <Link to="/create-user">Click here</Link> to
          create one.
        </p>
      </CenteredContainer>
    </Background>
  );
}
