import React, { useState } from "react";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function UserCreatePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h2>Skapa användare</h2>
      <Form handleOnSubmit={handleOnSubmit}>
        <InputField
          type="text"
          value={firstName}
          placeholder="Förnamn"
          setValue={setFirstName}
        />
        <br />
        <InputField
          type="text"
          value={lastName}
          placeholder="Efternamn"
          setValue={setLastName}
        />
        <br />
        <InputField
          type="text"
          value={email}
          placeholder="Email"
          setValue={setEmail}
        />
        <br />
        <InputField
          type="password"
          value={password}
          placeholder="Password"
          setValue={setPassword}
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
      <p>
        Redan en användare? <Link to="/">Klicka här</Link> för att komma till
        inloggningssidan.
      </p>
    </div>
  );
}
