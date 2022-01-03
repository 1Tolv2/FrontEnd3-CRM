import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import Grid from "../components/Grid"
import CustomCustomerForm from "../components/CustomCustomerForm";
import H1 from "../components/H1";

export default function CustomerDetailPage() {
  const [customer, setCustomer] = useState(null);

  const navigate = useNavigate();
  let params = useParams();

  const id = params.id;
  const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
  const token = localStorage.getItem("webb21-js3");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log(id);

  useEffect(() => {
    !token && navigate("/login")

    fetch(url, {
      headers: headers,
    }).then(res => res.json())
    .then(data => setCustomer(data))
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
    
    const payload = {};
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      target[i].value !== "" && (payload[target[i].id] = target[i].value)
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
        <Grid gap gridColTemplate={"auto auto auto auto"}>
          <Grid item colStart={1} colEnd={5}>
            <Button gridButton>
              <Link to="/home">&larr; Tillbaka</Link>
            </Button>
            <H1>{customer.name}</H1>
              <Button delete onClick={handleOnDelete}>
                Ta bort
              </Button>
          </Grid>
          <Grid item colRowStart={2} colStart={1} colEnd={3}>
            <Grid gridColTemplate={"100px auto"}>
            <Grid item colStart={1} colEnd={2}>Org.nr:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.organisationNr}</Grid>
            <Grid item colStart={1} colEnd={2}>Moms.nr:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.vatNr}</Grid>
            <Grid item colStart={1} colEnd={2}>Reference:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.reference}</Grid>
            <Grid item colStart={1} colEnd={2}>Bet.villkor:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.paymentTerm}</Grid>
            <Grid item colStart={1} colEnd={2}>Hemsida:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.website}</Grid>
            <Grid item colStart={1} colEnd={2}>E-post:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.email}</Grid>
            <Grid item colStart={1} colEnd={2}>Tel.nr:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.phoneNumber}</Grid>
            </Grid>
          </Grid>
          <Grid item colRowStart={2} colStart={3} colEnd={5}>
            <h3>Redigera kunduppgifter</h3>
            <CustomCustomerForm
              handleOnSubmit={handleOnSubmit}
              buttonText="Spara"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
