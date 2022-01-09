import React, { useState } from "react";
import InputField from "./InputField";
import Form from "./Form";
import Button from "./Button";

export default function CustomCustomerForm({ handleOnSubmit, buttonText, nameRequired }) {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Form small
      handleOnSubmit={handleOnSubmit}
      gridColTemplate={"auto auto"}
    >
      <InputField
        type="text"
        id="name"
        value={name}
        setValue={setName}
        labelText="Company Name:"
        required={nameRequired}
      />
      <InputField
        type="text"
        id="organisationNr"
        value={organisationNr}
        setValue={setOrganisationNr}
        labelText="Org.no:"
      />
      <InputField
        type="text"
        id="vatNr"
        value={vatNr}
        setValue={setVatNr}
        labelText="VATno:"
        title="Put SE followed by 10 numbers."
        pattern="^SE[0-9]{10}$"
      />
      <InputField
        type="text"
        id="reference"
        value={reference}
        setValue={setReference}
        labelText="Reference:"
      />
      <InputField
        type="number"
        id="paymentTerm"
        value={paymentTerm}
        setValue={setPaymentTerm}
        labelText="Payment Terms:"
      />
      <InputField
        type="text"
        id="website"
        value={website}
        setValue={setWebsite}
        labelText="Website:"
      />
      <InputField
        type="text"
        id="email"
        value={email}
        setValue={setEmail}
        labelText="E-mail:"
        title="Use a valid e-mail"
        pattern=".+@.+\..+"
      />
      <InputField
        type="number"
        id="phoneNumber"
        value={phoneNumber}
        setValue={setPhoneNumber}
        labelText="Tel.no:"
      />
      <Button gridButton type="submit" colStart={4}>
        {buttonText}
      </Button>
    </Form>
  );
}
