import React, { Component, useEffect, useState } from "react";
import Home from '../../Pages/HomePage/Home'
import AdminPanel from "../../components/AdminPanel/MainPage/MainPage";
export default function SwitchPanel() {
    const [item, setItem] = useState([])
    useEffect(()=>{

        setItem(localStorage.getItem('item'))
    },[])
    console.log(item);
  return item=="Admin" ? <AdminPanel/> : <h4>This Page For Admin</h4>;
}