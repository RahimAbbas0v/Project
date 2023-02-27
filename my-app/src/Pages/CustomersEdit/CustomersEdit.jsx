import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik';
import axios from 'axios';
import "./CustomersEdit.css"
function CustomerEdit() {
    let {Id}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()  
    const [fname, setfName] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:4000/userdata/${Id}`)
        .then(res=>{
            setfName(res.data.firstname)
            setLname(res.data.lastname)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setAddress(res.data.address)
        })
    },[])
    const BackProduct=()=>{
        navigate("/admin/products")
    }
   
    const handlefirstname = (e) => {
      setfName(e.target.value);
    };
    const handlelastname = (e) => {
      setLname(e.target.value);
    };
    const handleaddress = (e) => {
      setAddress(e.target.value);
    };
      const handleemail = (e) => {
        setEmail(e.target.value);
      };
      const handlephone = (e) => {
        setPhone(e.target.value);
      };

    const handlesubmit =(e)=>{
      e.preventDefault()
      if (email==""|| fname=="" || lname=="" || phone=="" || address=="") {
    alert("Input Empty")
    }else{
        axios.put(`http://localhost:4000/userdata/${Id}`,{
            email: email,
            firstname: fname,
            lastname: lname,
            address:address,
            phone:phone,
          })
          .then()
          .then((res)=>console.log(res.data))}
          alert("Edited")
    }
    return (
       <>
       <div id="customerEdit">
          <form action="" >
        <input
          type="text"
          name="fname"
          onChange={handlefirstname}
          defaultValue={fname}
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="lname"
          defaultValue={lname}
          onChange={handlelastname}
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="email"
          defaultValue={email}
          onChange={handleemail}
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="address"
          defaultValue={address}
          onChange={handleaddress}
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="phone"
          defaultValue={phone}
          onChange={handlephone}
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       <button onClick={handlesubmit}>Save</button>
      </form></div>
       
       </>
    )
}

export default CustomerEdit
