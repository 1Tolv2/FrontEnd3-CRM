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
import ProgressBar from "../components/ProgressBar";
import { DarkThemeContext } from "../App";
import tokens from "../components/Tokens";
const { lightTheme, darkTheme } = tokens;

const url = "https://frebi.willandskill.eu/api/v1/customers";
let token;
const headers = {
  "Content-Type": "application/json",
};

export default function HomePage() {
  const [response, setResponse] = useState(null);
  const [addCustomer, setAddCustomer] = useState(false);
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const { isDarkMode } = useContext(DarkThemeContext);
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
      <Grid gap gridColTemplate={"auto auto auto auto"}>
        <Grid item shadow rowStart={1} colStart={1} colEnd={5}>
          <UserInformation />
        </Grid>

        <Grid item shadow colStart={3} colEnd={5}>
          <h3>Mål</h3>
          <h4>Säljsamtal</h4>
          <ProgressBar
            progress={47}
            progressColor={isDarkMode ? darkTheme.purpleBlue : lightTheme.blue}
          />
          <h4>Bokade möten</h4>
          <ProgressBar
            progress={80}
            progressColor={
              isDarkMode ? darkTheme.lightGreen : lightTheme.lightGreen
            }
          />
          <h4>Offerter</h4>
          <ProgressBar
            progress={35}
            progressColor={isDarkMode ? darkTheme.paleRed : lightTheme.paleRed}
          />
        </Grid>
        <Grid item shadow rowStart={2} colStart={1} colEnd={3}>
          <h3>Kunder</h3>
          <Table>
            <thead>
              <tr>
                <th>Företagsnamn</th>
                <th>Org.nr</th>
                <th>Moms.nr</th>
                <th>Reference</th>
                <th>E-post</th>
                <th>Tel.nr</th>
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
          <AddButton function={{ addCustomer, setAddCustomer }} />
        </Grid>

        {addCustomer && (
          <Grid item shadow transitionIn rowStart={3} colStart={1} colEnd={3}>
            <h3>Lägg till kund</h3>
            <CustomCustomerForm
              handleOnSubmit={handleOnSubmit}
              buttonText="Lägg till"
              nameRequired={true}
            />
            {response && (
              <>
                <ErrorText>{response}</ErrorText>
              </>
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
}
