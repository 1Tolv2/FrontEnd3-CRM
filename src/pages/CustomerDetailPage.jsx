import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CustomerContext } from "../App";
import Button from "../components/Button";
import Container from "../components/Container";
import CustomCustomerForm from "../components/CustomCustomerForm";
import { ValidateVATnr } from "../components/ValidateVATnr";
import UnorderedList from "../components/UnorderedList";
import H1 from "../components/H1";

export default function CustomerDetailPage() {
  const [customer, setCustomer] = useState(null);

  const navigate = useNavigate();
  let params = useParams();
  const { customerList } = useContext(CustomerContext);

  const id = params.id;
  const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
  const token = localStorage.getItem("webb21-js3");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log(id);

  function checkCustomerList() {
    setCustomer(customerList.find((item) => item.id == id));
  }
  useEffect(() => {
    customerList ? checkCustomerList() : navigate("/home");
  }, []);

  function handleOnDelete() {
    console.log(id);

    fetch(url, {
      method: "DELETE",
      headers: headers,
    }).then((res) => navigate("/home"));
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

    //checks if the value is added
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      console.log(target[i].value);
      if (target[i].value) {
        let temp = stateList[i];
        if (temp == "vatNr") {
          const VATnr = target[i].value;
          console.log(VATnr);
          payload[temp] = ValidateVATnr(VATnr);
        } else if (temp != "VATnr") {
          payload[temp] = target[i].value;
        }
      }
    }
    console.log(payload);

    fetch(url, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomer(data);
      });
  }
  return (
    <>
      {customer && (
        <>
          <Container>
            <Button>
              <Link to="/home">&larr; Tillbaka</Link>
            </Button>
            <H1>{customer.name}</H1>
            <Container centered width={100}>
              <Button delete onClick={handleOnDelete}>
                Ta bort
              </Button>
            </Container>
          </Container>
          <Container>
            <UnorderedList>
              <li>{customer.organisationNr}</li>
              <li>{customer.vatNr}</li>
              <li>{customer.reference}</li>
              <li>{customer.paymentTerm} days</li>
              <li>{customer.website}</li>
              <li>{customer.email}</li>
              <li>{customer.phoneNumber}</li>
            </UnorderedList>
          </Container>
          <Container>
            <CustomCustomerForm
              handleOnSubmit={handleOnSubmit}
              buttonText="Spara"
            />
          </Container>
        </>
      )}
    </>
  );
}
