import React, { useState } from "react";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import { ErrorResponse } from "../components/ErrorResponse";

export default function UserCreatePage() {
  const [response, setResponse] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      .then((data) => setResponse(Object.entries(data)));
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
        />
        {response &&
          response.map((item, index) => {
            return (
              item[0] == "firstName" && (
                <>
                <br/>
                <ErrorText key={index}>
                  {item[1]}
                </ErrorText>
                </>
              )
            );
          })}
        <InputField
          type="text"
          value={lastName}
          id="lastName"
          setValue={setLastName}
          labelText="Efternamn:"
        />
        {response &&
          response.map((item, index) => {
            return (
              item[0] == "lastName" && (
                <> <br/>
                <ErrorText key={index}>
                  {item[1]}
                </ErrorText>
                </>
              )
            );
          })}
        <InputField
          type="text"
          value={email}
          id="email"
          setValue={setEmail}
          labelText="E-post:"
        />
        {response &&
          response.map((item, index) => {
            return (
              item[0] == "email" && (
                <> <br/>
                <ErrorText key={index}>
                  {item[1]}
                </ErrorText>
                </>
              )
            );
          })}
        <InputField
          type="password"
          value={password}
          id="password"
          setValue={setPassword}
          labelText="Lösenord:"
        />
        {response &&
          response.map((item, index) => {
            return (
              item[0] == "password" && (
                <> <br/>
                <ErrorText key={index}>
                  {item[1]}
                </ErrorText>
                </>
              )
            );
          })}
        <Button gridButton gridStart={2}>
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
