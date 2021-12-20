import React, { useContext, useEffect, useState } from "react";
import InputField from "../components/InputField";
import Form from "../components/Form";
import UserInformation from "../components/UserInformation";
import { Link } from "react-router-dom";
import { CustomerContext } from "../App";



const url = "https://frebi.willandskill.eu/api/v1/customers";
const token = localStorage.getItem("webb21-js3");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default function HomePage() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {customerList, setCustomerList} = useContext(CustomerContext)

  useEffect(() => {
    renderCustomerList();
  }, []);

  function renderCustomerList() {
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => renderCustomerList());
  }
  return (
    <div>
      <UserInformation />
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
            <button type="submit">Add customer</button>
          </Form>
          {customerList &&
            customerList.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={`/customer/${index}`}>
                      <h2>
                        {item.name} - {item.organisationNr}
                      </h2>
                      {console.log(customerList)}
                  </Link>
                  <p>
                    {item.reference} | {item.email} | {item.phoneNumber}
                  </p>
                </div>
              );
            })}
          <ul>
            <li>
              VG: Validera så att VATnr fältet innehåller "SE" och därefter 10
              siffror.
            </li>
          </ul>
    </div>
  );
}
