import React, {useState} from 'react'
import InputField from './InputField'
import Form from './Form';

export default function CustomCustomerForm({handleOnSubmit, buttonText}) {
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
            <InputField
              type="text"
              placeholder="Momsnummer"
              value={vatNr}
              setValue={setVatNr}
            />
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
    )
}
