import React, { useState } from "react";
import InputField from "./InputField";
import Form from "./Form";
import Button from "./Button";
import { ValidateVATnr } from "./ValidateVATnr";
import ErrorText from "./ErrorText";

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
      gridColTemplate={"130px 35% 130px 35%"}
    >
      <InputField
        type="text"
        id="name"
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
      <label htmlFor="vatNr">Momsnummer:</label>
      <input
        type="text"
        id="vatNr"
        value={vatNr}
        onChange={(e) => {
          setVatNr(e.target.value)
        }}
      />
      <InputField
        type="text"
        id="reference"
        value={reference}
        setValue={setReference}
        labelText="Reference:"
      />
      { //placed here to allow for reference to keep it's place in the grid
      (!ValidateVATnr(vatNr) && vatNr !== "") && (
        <>
          <ErrorText gridStart={2} gridEnd={5}>
            Vänligen ange SE följt av 10 siffror.
          </ErrorText>
        </>
      )}
      
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
      <Button gridButton type="submit" gridStart={4}>
        {buttonText}
      </Button>
    </Form>
  );
}
