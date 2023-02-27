import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import "./ResetPassword.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(6, 'E-mail must be more than 6 characters')
      .max(30, 'Too Long!')
      .required('E-Mail Is Empty')
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Emailis not correct"
      ),
  });

function Login() {
  const navigate=useNavigate()
  const backBtn =()=>{
    navigate('/login')
  }
  return (
    <>
    <section id='loginsection' className='loginsection'>
        <div className="container" id='logincontainer'>
         <Formik
       initialValues={{ email: '',}}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm}) => {
        if(values.email==""){
          alert("its empty")
        }else{
          axios.post('http://localhost:4000/forgot-password',values)
          .then((res)=>console.log(res.data))
          alert("Check Your Email Address")
        }
       resetForm()
     }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit} id="loginform">
            <div className='imgdiv'>
            <img src="https://images.getbento.com/accounts/64b147bfe7cdcd17347051a0bc071733/media/images/61754Main_Logo.png" alt="" />
            </div >
            <h3>Enter Your E-mail</h3>
            <div style={{paddingTop:"3rem",paddingBottom:"3rem"}}>
            <AccountCircleIcon id="nameicon"/>
           <input
           id='mailinput'
             type="text"
             name="email"
             onChange={handleChange}
             value={values.email}
             placeholder="Email"
           />
            {errors.email && touched.email? <div style={{color:"red",fontSize:12}}>{errors.email}</div>:null}
           </div>
           <div></div>
           <button onClick={backBtn}>
             Go Back
           </button>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button> <br />
         </form>
       )}
     </Formik>
        </div>
    </section>
    
    </>
  )
}

export default Login

