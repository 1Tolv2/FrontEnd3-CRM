const baseUrl = "https://frebi.willandskill.eu/";

function handleUser(endpoint, payload) {
  console.log(payload);
  return fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function getAndRemoveCustomerData(method, endpoint, token) {
  return fetch(`${baseUrl}${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function createCustomer(payload, token) {
  return fetch(`${baseUrl}api/v1/customers/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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

const api = {
  handleUser,
  getAndRemoveCustomerData,
  createCustomer,
  editCustomer,
};

export { api };
