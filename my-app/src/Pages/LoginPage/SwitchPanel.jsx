import React, { Component, useEffect, useState } from "react";
import Home from '../HomePage/Home'
import AdminPanel from "../../components/AdminPanel/MainPage/MainPage";
export default function SwitchPanel() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.UserType == "Admin") {
          setAdmin(true);
        }
      });
  }, []);

  return admin ? <AdminPanel/>:<Home/>;
}