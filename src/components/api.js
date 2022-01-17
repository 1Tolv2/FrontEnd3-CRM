const baseUrl = "https://frebi.willandskill.eu/";

function handleUser(endpoint, payload) {
  console.log(payload);
  return fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

// function getCustomerList(token) {
//   return fetch(`${baseUrl}api/v1/customers`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

function getCustomer(method, endpoint, token) {
  return fetch(`${baseUrl}${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function createCustomer(payload) {
  return fetch(`${baseUrl}api/v1/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function editCustomer(endpoint, payload, token) {
  return fetch(`${baseUrl}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}

// function deleteCustomer(detailURL, token) {
//   return fetch(detailURL, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

const api = {
  handleUser,
  // getCustomerList,
  getCustomer,
  createCustomer,
  editCustomer,
  // deleteCustomer,
};

export { api };
