import React, { Component, useEffect, useState } from "react";
import Home from '../../Pages/HomePage/Home'
import AdminPanel from "../../Pages/AdminPanelPage/Admin";
export default function SwitchPanel() {
  const [item, setItem] = useState([])
  useEffect(()=>{
      setItem(JSON.parse(localStorage.getItem('item')))
  },[])
  return item.UserType==="Admin" ? <AdminPanel/> :<h3>OnlyfdfAdmin</h3>;
}