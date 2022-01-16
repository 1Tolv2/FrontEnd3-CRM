const url = "https://frebi.willandskill.eu/";

function createUser(payload, setErrorResponse, navigate) {
  fetch(`${url}auth/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (!res.ok) {
      res
        .json()
        .then((data) => setErrorResponse(Object.entries(data)[0][1][0]));
    } else navigate("/login");
  });
}

function activateUser(searchParams, setErrorResponse, navigate) {
  /* The token in the URL is a one-time-use token 
      and expires if not used in a certain amount of time.
      The API will return a stale token response if the token is no longer usable.*/
  const params = new URLSearchParams(searchParams);
  fetch(`${url}auth/users/activate/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid: params.get("uid"),
      token: params.get("token"),
    }),
  }).then((res) => {
    if (!res.ok) {
      res.json().then((data) => setErrorResponse(Object.entries(data)[0]));
    } else navigate("/login");
  });
}

function loginUser(payload, setErrorResponse, navigate) {
  fetch(`${url}api-token-auth/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty("nonFieldErrors")) {
        setErrorResponse(data.nonFieldErrors);
      } else {
        localStorage.setItem("Token", data.token);
        navigate("/home");
      }
    });
}

function getCustomerList(token, setCustomerList) {
  fetch(`${url}api/v1/customers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setCustomerList(data.results));
}

function getCustomer(detailURL, token, setCustomer) {
  fetch(detailURL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setCustomer(data));
}

function createCustomer(payload, setErrorResponse, setCustomerList) {
  fetch(`${url}api/v1/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.hasOwnProperty("detail")) {
        setErrorResponse(data.detail);
      } else {
        const token = localStorage.getItem("Token");
        getCustomerList(token, setCustomerList);
      }
    });
}

function editCustomer(detailURL, payload, setCustomer) {
  const token = localStorage.getItem("Token");
  fetch(detailURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => setCustomer(data));
}

function deleteCustomer(detailURL, token, navigate) {
  fetch(detailURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(() => navigate("/home"));
}

const api = {
  createUser,
  activateUser,
  loginUser,
  getCustomerList,
  getCustomer,
  createCustomer,
  editCustomer,
  deleteCustomer,
};

export default api;
