import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserActivation() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => { 
    const urlSearches = location.search;
    const params = new URLSearchParams(urlSearches);
    const searchParamsList = {};

    if ( urlSearches !== ""){
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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login");
      });
    console.log(payload);}
  }, []);

  return <></>;
}
