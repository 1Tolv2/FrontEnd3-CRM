import React, { useEffect, useContext } from "react";
import Grid from "./Grid";
import UserCard from "./UserCard";
import { UserContext } from "../App";

export default function UserInformation() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    fetch("https://frebi.willandskill.eu/api/v1/me", {
      headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`}
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return <Grid item>{user && <UserCard />}</Grid>;
}
