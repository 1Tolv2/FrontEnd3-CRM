import React, { useState } from "react";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import ErrorResponse from "../components/ErrorResponse"

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
    <Container centered float width={350}>
      <h2>Skapa användare</h2>
      <Form handleOnSubmit={handleOnSubmit} gridColTemplate={"85px auto"}>
        <InputField
          type="text"
          value={firstName}
          id="firstName"
          setValue={setFirstName}
          labelText="Förnamn:"
          required
        />
        <InputField
          type="text"
          value={lastName}
          id="lastName"
          setValue={setLastName}
          labelText="Efternamn:"
          required
        />
        <InputField
          type="text"
          value={email}
          id="email"
          setValue={setEmail}
          labelText="E-post:"
          title="Ange en giltig e-postadress"
          pattern="^.+@.+\..+$"
          required
        />
        <InputField
          type="password"
          value={password}
          id="password"
          setValue={setPassword}
          labelText="Lösenord:"
          title="Lösenordet måste vara minst 8 tecken"
          pattern="^.{8,}$"
          required
        />
        {response && <ErrorResponse>{response}</ErrorResponse>}
        <Button gridButton colStart={1} colEnd={3} width={100}>
          Skapa
        </Button>
      </Form>
      <p>
        Redan en användare? <Link to="/login">Klicka här</Link> för att komma
        till inloggningssidan.
      </p>
    </Container>
  );
}
