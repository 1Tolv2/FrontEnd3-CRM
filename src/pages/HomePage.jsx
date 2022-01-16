import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserInformation from "../components/UserInformation";
import { CustomerContext } from "../App";
import CustomCustomerForm from "../components/CustomCustomerForm";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import RedText from "../components/RedText";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import AddButton from "../components/AddButton";
import TeamModule from "../components/TeamModule";
import ToDoList from "../components/ToDoList";
import HiddenContainer from "../components/HiddenContainer";
import api from "../components/api";


export default function HomePage() {
  const [errorResponse, setErrorResponse] = useState(null);
  const [addCustomer, setAddCustomer] = useState(false);
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      api.getCustomerList(token, setCustomerList);
    } else {
      navigate("/login");
    }
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = {};
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      target[i].value !== "" && (payload[target[i].id] = target[i].value);
    }
    api.createCustomer(payload, setErrorResponse, setCustomerList)
  }
  return (
    <>
      <Grid gap gridColTemplate={"auto auto auto auto auto"}>
        <GridItem container rowStart={1} colStart={1} colEnd={3}>
          <UserInformation />
        </GridItem>
        <GridItem container rowStart={1} colStart={3} colEnd={6}>
          <TeamModule />
        </GridItem>
        <GridItem container rowStart={2} colStart={1} colEnd={2}>
          <ToDoList></ToDoList>
        </GridItem>
        <GridItem container rowStart={2} colStart={2} colEnd={6}>
          <h2>Kunder</h2>
          <Table>
            <thead>
              <tr>
                <th>Company name</th>
                <th>Org.no</th>
                <th>VATno</th>
                <th>Pay.Term</th>
                <th>Website</th>
                <th>Reference</th>
                <th>E-mail</th>
                <th>Tel.no</th>
              </tr>
            </thead>
            <TableBody>
              {customerList &&
                customerList.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/customer/${item.id}`);
                      }}
                    >
                      <td>{item.name}</td>
                      <td>{item.organisationNr}</td>
                      <td>{item.vatNr}</td>
                      <td>{item.paymentTerm} days</td>
                      <td>{item.website}</td>
                      <td>{item.reference}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                    </tr>
                  );
                })}
            </TableBody>
          </Table>
          <AddButton state={addCustomer} setState={setAddCustomer} />
          {addCustomer && (
            <HiddenContainer state={addCustomer}>
              <h2>ADD CUSTOMER</h2>
              <CustomCustomerForm
                handleOnSubmit={handleOnSubmit}
                buttonText="ADD"
                nameRequired={true}
              />
              {errorResponse && (
                <>
                  <RedText>{errorResponse}</RedText>
                </>
              )}
            </HiddenContainer>
          )}
        </GridItem>
      </Grid>
    </>
  );
}
