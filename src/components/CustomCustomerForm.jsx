import React, { useState } from "react";
import InputField from "./InputField";
import Form from "./Form";

export default function CustomCustomerForm({ handleOnSubmit, buttonText }) {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Form handleOnSubmit={handleOnSubmit}>
      <InputField
        type="text"
        placeholder="Företagsnamn"
        value={name}
        setValue={setName}
      />
      <br />
      <InputField
        type="text"
        placeholder="Organisationsnummer"
        value={organisationNr}
        setValue={setOrganisationNr}
      />
      <br />
      {/* <InputField
              type="text"
              placeholder="Momsnummer"
              value={vatNr}
              setValue={setVatNr}
            /> */}
      <input
        type="text"
        id="Momsnummer"
        value={vatNr}
        placeholder="Momsnummer"
        onChange={(e) => {
        //   const VATnr = e.target.value;
        //   const regex = /^SE[0-9]{10}$/;
        //   if (VATnr.length == 12){
        //   VATnr.match(regex) ? setVatNr(e.target.value) : setVatNr("")
        // }
          setVatNr(e.target.value)
        }}
      />
      <label htmlFor="Momsnummer"></label>
      <br />
      <InputField
        type="text"
        placeholder="Kunds reference"
        value={reference}
        setValue={setReference}
      />
      <br />
      <InputField
        type="text"
        placeholder="Betalningsvillkor"
        value={paymentTerm}
        setValue={setPaymentTerm}
      />
      <br />
      <InputField
        type="text"
        placeholder="Hemsida"
        value={website}
        setValue={setWebsite}
      />
      <br />
      <InputField
        type="text"
        placeholder="E-mail"
        value={email}
        setValue={setEmail}
      />
      <br />
      <InputField
        type="text"
        placeholder="Telefonnummer"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <br />
      <button type="submit">{buttonText}</button>
    </Form>
  );
}
