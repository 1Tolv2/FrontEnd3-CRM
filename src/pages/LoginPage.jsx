import React, { useState } from "react";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import UserActivation from "../components/UserActivation";
import Button from "../components/Button";
import Container from "../components/Container";
import H1 from "../components/H1";
import ErrorText from "../components/ErrorText";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

UserActivation()

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
        console.log(data)
        const token = data.token;
        localStorage.setItem("webb21-js3", token);
        token && navigate("/home"); //Ser till att du inte navigeras till /home innan du fått en token
      });
  }
  return (
    <Container centered float width={350} >
            <H1>iCRM</H1>
      <Form
        handleOnSubmit={handleOnSubmit} gridColTemplate={"85px auto"}
      >
        <InputField
          type="text"
          value={email}
          id="email"
          setValue={setEmail}
          labelText="E-post:"
        />
        <InputField
          type="password"
          value={password}
          id="password"
          setValue={setPassword}
          labelText="Lösenord:"
        />
        <Button form gridStart={2}>Logga in</Button>
      </Form>
      <p>Saknar användare? <Link to="/create-user">Klicka här</Link> för att skapa en.</p>
    </Container>
  );
}
