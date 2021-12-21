import React, { useState } from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        // console.log(data);
        const token = data.token;
        localStorage.setItem("webb21-js3", token);
        token && navigate("/home"); //Ser till att du inte navigeras till /home innan du fått en token
      });
  }
  return (
    <div>
      <Form
        handleOnSubmit={handleOnSubmit}
      >
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
    </div>
  );
}
