import React, { useState } from "react";
import InputField from "./InputField";
import Form from "./Form";
import Button from "./Button";

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
    <Form
      handleOnSubmit={handleOnSubmit}
      gridColTemplate={"130px auto 130px auto"}
    >
      <InputField
        type="text"
        id="companyName"
        value={name}
        setValue={setName}
        labelText="Företagsnamn:"
      />
      <InputField
        type="text"
        id="organisationsNr"
        value={organisationNr}
        setValue={setOrganisationNr}
        labelText="Org.nummer:"
      />
      <InputField
        type="text"
        id="vatNr"
        value={vatNr}
        setValue={setVatNr}
        labelText="Momsnummer:"
      />
      <InputField
        type="text"
        id="reference"
        value={reference}
        setValue={setReference}
        labelText="Reference:"
      />
      <InputField
        type="text"
        id="paymentTerm"
        value={paymentTerm}
        setValue={setPaymentTerm}
        labelText="Betalningsvillkor:"
      />
      <InputField
        type="text"
        id="website"
        value={website}
        setValue={setWebsite}
        labelText="Hemsida:"
      />
      <InputField
        type="text"
        id="email"
        value={email}
        setValue={setEmail}
        labelText="E-post:"
      />
      <InputField
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        setValue={setPhoneNumber}
        labelText="Tel.nummer:"
      />
      <Button formButton type="submit" gridStart={4}>
        {buttonText}
      </Button>
    </Form>
  );
}
