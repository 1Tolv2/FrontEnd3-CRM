import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Button from "../components/Button";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import H1 from "../components/H1";
import HiddenContainer from "../components/HiddenContainer";
import CustomCustomerForm from "../components/CustomCustomerForm";
import AddButton from "../components/AddButton";
import { api } from "../components/api";
import Table from "../components/Table";
import TableBody from "../components/TableBody";

export default function CustomerDetailPage() {
  const [customer, setCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(false);

  const navigate = useNavigate();
  const customerUrlEndpoint = `api/v1/customers/${
    useParams().id
  }/`;
  const token = localStorage.getItem("Token");

  useEffect(() => {
    if (token) {
      api
        .getCustomer("GET", customerUrlEndpoint, token)
        .then((res) => res.json())
        .then((data) => setCustomer(data));
    } else {
      navigate("/login");
    }
  }, []);

  function handleOnDelete() {
    api.getCustomer("DELETE", customerUrlEndpoint, token).then(() => navigate("/home"));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = {};
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      target[i].value !== "" && (payload[target[i].id] = target[i].value);
    }
    api.editCustomer(customerUrlEndpoint, payload, token)
    .then((res) => res.json())
    .then((data) => setCustomer(data));
  }
  return (
    <>
      {customer && (
        <Grid gridColTemplate={"auto auto auto auto"}>
          <GridItem container colStart={1} colEnd={5}>
            <Link to="/home">
              <Button gridButton width="fit-content">
                &larr; Back
              </Button>
            </Link>
            <H1>{customer.name}</H1>
            <Button
              gridButton
              delete
              onClick={handleOnDelete}
              width="fit-content"
            >
              Delete
            </Button>
          </GridItem>
          <GridItem container rowStart={2} rowEnd={4} colStart={1} colEnd={4}>
            <img className="graph" src="/graph.svg" alt="graph"></img>
          </GridItem>
          <GridItem container colRowStart={2} colStart={4} colEnd={5}>
            <Table>
              <TableBody>
                <tr>
                  <td>Org.no:</td>
                  <td>{customer.organisationNr}</td>
                </tr>
                <tr>
                  <td>VAT.no:</td>
                  <td>{customer.vatNr}</td>
                </tr>
                <tr>
                  <td>Reference:</td>
                  <td>{customer.reference}</td>
                </tr>
                <tr>
                  <td>Pay.terms:</td>
                  <td>{customer.paymentTerm}</td>
                </tr>
                <tr>
                  <td>Website:</td>
                  <td>{customer.website}</td>
                </tr>
                <tr>
                  <td>E-mail:</td>
                  <td>{customer.email}</td>
                </tr>
                <tr>
                  <td>Tel.no:</td>
                  <td>{customer.phoneNumber}</td>
                </tr>
              </TableBody>
            </Table>
            <AddButton state={editCustomer} setState={setEditCustomer} />
            {editCustomer && (
              <HiddenContainer state={editCustomer}>
                <h2>Edit customer</h2>
                <CustomCustomerForm
                  handleOnSubmit={handleOnSubmit}
                  buttonText="Save"
                />
              </HiddenContainer>
            )}
          </GridItem>
        </Grid>
      )}
    </>
  );
}
