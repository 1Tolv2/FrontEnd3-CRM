import React, { useContext, useEffect } from "react";
import UserInformation from "../components/UserInformation";
import { Link } from "react-router-dom";
import { CustomerContext } from "../App";
import CustomCustomerForm from "../components/CustomCustomerForm";
import { ValidateVATnr } from "../components/ValidateVATnr";
import Container from "../components/Container";
import Table from "../components/Table";
import TableBody from "../components/TableBody"

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

    //checks what values are added
    const target = e.target;
    for (let i = 0; i < target.length; i++) {
      console.log(target[i].value);
      if (target[i].value) {
        let temp = stateList[i];

        if (temp == "vatNr") {
          // checks if the VATnr is in the correct format
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
      <Container width={1200}>
      <UserInformation />
        <CustomCustomerForm
          handleOnSubmit={handleOnSubmit}
          buttonText="Lägg till"
        />
      
      <Table>
        <thead>
          <tr>
            <th>Företagsnamn</th>
            <th>Org.nr</th>
            <th>Reference</th>
            <th>E-post</th>
            <th>Tel.nr</th>
            <th> </th>
          </tr>
        </thead>
        <TableBody>
          {customerList &&
            customerList.map((item, index) => {
              return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.organisationNr}</td>
                    <td>{item.reference}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <Link to={`/customer/${item.id}`}>
                      &gt;&gt;</Link>
                    </td>
                </tr>
              );
            })}
        </TableBody>
      </Table>
      </Container>
    </div>
  );
}
