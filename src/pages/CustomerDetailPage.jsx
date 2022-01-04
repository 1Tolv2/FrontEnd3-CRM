import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import Grid from "../components/Grid";
import H1 from "../components/H1";
import HiddenContainer from "../components/HiddenContainer";
import CustomCustomerForm from "../components/CustomCustomerForm";
import AddButton from "../components/AddButton";

export default function CustomerDetailPage() {
  const [customer, setCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(false);


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
          <Grid item padding shadow colStart={1} colEnd={5}>
              <Link to="/home"><Button gridButton width="fit-content">&larr; Back</Button></Link>
            <H1>{customer.name}</H1>
              <Button gridButton delete onClick={handleOnDelete} width="fit-content">
                Delete
              </Button>
          </Grid>
          <Grid item shadow padding rowStart={2} rowEnd={4} colStart={1} colEnd={4}>
            <img className="graph" src="/graph.svg" alt="graph"></img>
          </Grid>
          <Grid item shadow padding colRowStart={2} colStart={4} colEnd={5}>
            <Grid gridColTemplate={"100px auto"}>
            <Grid item colStart={1} colEnd={2}>Org.no:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.organisationNr}</Grid>
            <Grid item colStart={1} colEnd={2}>VATno:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.vatNr}</Grid>
            <Grid item colStart={1} colEnd={2}>Reference:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.reference}</Grid>
            <Grid item colStart={1} colEnd={2}>Pay.terms:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.paymentTerm}</Grid>
            <Grid item colStart={1} colEnd={2}>Website:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.website}</Grid>
            <Grid item colStart={1} colEnd={2}>E-mail:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.email}</Grid>
            <Grid item colStart={1} colEnd={2}>Tel.no:</Grid>
            <Grid item colStart={2} colEnd={3}>{customer.phoneNumber}</Grid>
            </Grid>
            <AddButton state={ editCustomer} setState={setEditCustomer} />
          {editCustomer && (
          <HiddenContainer state={editCustomer}>
            <h2>Edit customer</h2>
            <CustomCustomerForm
              handleOnSubmit={handleOnSubmit}
              buttonText="Save"
            />
          </HiddenContainer>
        )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
