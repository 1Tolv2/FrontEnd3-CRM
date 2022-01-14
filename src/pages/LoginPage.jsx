import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import H1 from "../components/H1";
import ErrorResponse from "../components/ErrorResponse";
import Background from "../components/Background";

export default function LoginPage() {
  const [response, setResponse] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    /* The token in the URL is a one-time-use token 
    and expires if not used in a certain amount of time.
    The API will return a stale token response if the token is no longer usable.*/
    const params = new URLSearchParams(location.search);
    const uid = params.get("uid")
    const token = params.get("token")

    if (location.search !== "") {
      const url = "https://frebi.willandskill.eu/auth/users/activate/";
      const payload = {
        uid,
        token,
      };
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => (res.ok ? navigate("/login") : res.json()))
        .then((data) => data ? setResponse(Object.entries(data)[0]) : console.log("no data")
        );
    }
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { email, password };
    console.log(payload);
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        data.hasOwnProperty("nonFieldErrors") && setResponse(data.nonFieldErrors)
        console.log(data)
        const token = data.token;
        localStorage.setItem("webb21-js3", token);
        token && navigate("/home"); //Ser till att du inte navigeras till /home innan du fått en token
      });
  }
  return (
    <Background>
      <Container centered float width={350}>
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
        {response && <ErrorResponse>{response}</ErrorResponse>}
          <Button gridButton colStart={1} colEnd={3} width="100%">
            Sign in
          </Button>
        </Form>
        <p>
          Don't have an account? <Link to="/create-user">Click here</Link> to create one.
        </p>
      </Container>
    </Background>
  );
}
