import React, { createContext, useContext, useEffect, useState } from "react";
import InputField from "../components/InputField";
import Form from "../components/Form";
import UserInformation from "../components/UserInformation";
import { Link } from "react-router-dom";
import { CustomerContext } from "../App";
import CustomCustomerForm from "../components/CustomCustomerForm";

const url = "https://frebi.willandskill.eu/api/v1/customers";
const token = localStorage.getItem("webb21-js3");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default function HomePage() {
  const { customerList, setCustomerList } = useContext(CustomerContext);

  useEffect(() => {
    renderCustomerList();
  }, []);

  function renderCustomerList() {
    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const stateList = [
      "name",
      "organisationNr",
      "vatNr",
      "reference",
      "paymentTerm",
      "website",
      "email",
      "phoneNumber",
    ];
    const payload = {};
    console.log(stateList);

    //checks if the value is added and returns
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      console.log(target[i].value);
      if (target[i].value) {
        let temp = stateList[i];
        payload[temp] = target[i].value;
      }
    }
    console.log(payload);
    console.log(payload);
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderCustomerList();
      });
  }
  return (
    <div>
      <UserInformation />
      <CustomCustomerForm
        handleOnSubmit={handleOnSubmit}
        buttonText="Lägg till kund"
      />
      {customerList &&
        customerList.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/customer/${item.id}`}>
                <h2>
                  {item.name} - {item.organisationNr}
                </h2>
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
