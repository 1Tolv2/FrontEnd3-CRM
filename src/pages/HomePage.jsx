import React, { useContext, useEffect, useState } from "react";
import UserInformation from "../components/UserInformation";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../App";
import CustomCustomerForm from "../components/CustomCustomerForm";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import ErrorText from "../components/ErrorText";
import Grid from "../components/Grid";
import AddButton from "../components/AddButton";
import TeamModule from "../components/TeamModule";
import ToDoList from "../components/ToDoList";
import HiddenContainer from "../components/HiddenContainer";

const url = "https://frebi.willandskill.eu/api/v1/customers";
let token;
const headers = {
  "Content-Type": "application/json",
};

export default function HomePage() {
  const [response, setResponse] = useState(null);
  const [addCustomer, setAddCustomer] = useState(false);
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const navigate = useNavigate();

  useEffect(() => {
    token = localStorage.getItem("webb21-js3");
    headers["Authorization"] = `Bearer ${token}`;
    token ? renderCustomerList() : navigate("/login");
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

    const payload = {};
    const target = e.target;
    console.log(target);
    for (let i = 0; i < target.length; i++) {
      target[i].value !== "" && (payload[target[i].id] = target[i].value);
    }
    console.log(payload);

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.hasOwnProperty("detail")
          ? setResponse(data.detail)
          : renderCustomerList();
      });
  }
  return (
    <>
      <Grid gap gridColTemplate={"auto auto auto auto auto"}>
        <Grid item padding shadow rowStart={1} colStart={1} colEnd={3}>
          <UserInformation />
        </Grid>
        <Grid item padding shadow rowStart={1} colStart={3} colEnd={6}>
        <TeamModule/>
        </Grid>
        <Grid item padding shadow rowStart={2} colStart={1} colEnd={2}>
        <ToDoList></ToDoList>
        </Grid>
        <Grid item padding shadow rowStart={2} colStart={2} colEnd={6}>
          <h2>Kunder</h2>
          <Table>
            <thead>
              <tr>
                <th>Company name</th>
                <th>Org.no</th>
                <th>VATno</th>
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
                      <td>{item.reference}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                    </tr>
                  );
                })}
            </TableBody>
          </Table>
          <AddButton state={ addCustomer } setState={setAddCustomer} />
          {addCustomer && (
          <HiddenContainer state={addCustomer}>
            <h2>ADD CUSTOMER</h2>
            <CustomCustomerForm
              handleOnSubmit={handleOnSubmit}
              buttonText="ADD"
              nameRequired={true}
            />
            {response && (
              <>
                <ErrorText>{response}</ErrorText>
              </>
            )}
          </HiddenContainer>
        )}
        </Grid>
      </Grid>
    </>
  );
}
