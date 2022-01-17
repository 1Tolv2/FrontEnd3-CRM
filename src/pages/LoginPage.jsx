import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {api} from "../components/api";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CenteredContainer from "../components/CenteredContainer";
import H1 from "../components/H1";
import RedText from "../components/RedText";
import Background from "../components/Background";

export function LoginPage() {
  const [errorResponse, setErrorResponse] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
      /* The token in the URL is a one-time-use token 
      and expires if not used in a certain amount of time.
      The API will return a stale token response if the token is no longer usable.*/
  const params = new URLSearchParams(location.search);
  console.log(!(params.has("uid") && params.has("token")))
    if (!(params.has("uid") && params.has("token"))) {
        return;
      } else {
      api.handleUser("auth/users/activate/", {
        uid: params.get("uid"),
        token: params.get("token"),
      })
      .then((res) => {
        if (!res.ok) {
          res.json().then((data) => setErrorResponse("Expired authentication link used."))
        }
        navigate("/login");
    })}
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { email, password };
    api.handleUser("api-token-auth/", payload)
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty("nonFieldErrors")) {
        setErrorResponse("Incorrect e-mail or password, please try again.");
      } else {
        localStorage.setItem("Token", data.token);
        navigate("/home");
      }
    });
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
          {errorResponse && <RedText>{errorResponse}</RedText>}
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
