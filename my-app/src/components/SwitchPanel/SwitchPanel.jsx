import React, { Component, useEffect, useState } from "react";
import Home from '../../Pages/HomePage/Home'
import AdminPanel from "../../Pages/AdminPanelPage/Admin";
import Error from "../../Pages/ErrorPage/ErrorPage";
export default function SwitchPanel() {
  const [item, setItem] = useState([])
  useEffect(()=>{
      setItem(JSON.parse(localStorage.getItem('item')))
  },[])
  return item.UserType==="Admin" ? <AdminPanel/> :<Error/>;
}