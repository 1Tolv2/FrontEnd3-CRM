import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import H1 from "../components/H1";
import ErrorText from "../components/ErrorText";

export default function LoginPage() {
  const [response, setResponse] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const urlSearches = location.search;
    const params = new URLSearchParams(urlSearches);
    const searchParamsList = {};

    if (urlSearches !== "") {
      for (const [key, value] of params) {
        searchParamsList[`${key}`] = value;
      }
      console.log(searchParamsList.uid);
      const url = "https://frebi.willandskill.eu/auth/users/activate/";
      const payload = {
        uid: searchParamsList.uid,
        token: searchParamsList.token,
      };
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => (res.ok ? navigate("/login") : res.json()))
        .then((data) =>
          data ? setResponse(Object.entries(data)[0]) : console.log("no data")
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
        const token = data.token;
        localStorage.setItem("webb21-js3", token);
        token && navigate("/home"); //Ser till att du inte navigeras till /home innan du fått en token
      });
  }
  return (
    <Container centered float width={350}>
      <H1>iCRM</H1>
      <Form handleOnSubmit={handleOnSubmit} gridColTemplate={"85px auto"}>
        <InputField
          type="text"
          value={email}
          id="email"
          setValue={setEmail}
          labelText="E-post:"
          required
        />
        <InputField
          type="password"
          value={password}
          id="password"
          setValue={setPassword}
          labelText="Lösenord:"
          required
        />
        <Button gridButton colStart={1} colEnd={3} width={100}>
          Logga in
        </Button>
      </Form>
      {response && <ErrorText>{response}</ErrorText>}
      <p>
        Saknar användare? <Link to="/create-user">Klicka här</Link> för att
        skapa en.
      </p>
    </Container>
  );
}
