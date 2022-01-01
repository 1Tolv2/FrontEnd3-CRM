import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserActivation() {
  const [response, setResponse] = useState(null);
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const urlSearches = location.search;
    const params = new URLSearchParams(urlSearches);
    const searchParamsList = {};

    if (urlSearches !== "") {
      for (const [key, value] of params) {
        searchParamsList[`${key}`] = value;
      }
      console.log(searchParamsList.uid);
      const url = "https://frebi.willandskill.eu/auth/users/activate/";
      const payload = {
        uid: searchParamsList.uid,
        token: searchParamsList.token,
      };
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      .then(res => res.ok ? navigate("/login") : res.json())
      .then((data) => data ? setResponse(data): console.log("no data"))
    }
  }, []);

  return response
}
