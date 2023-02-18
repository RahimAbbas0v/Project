import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import "./Login.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios'
const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(6, 'Password must be more than 6 characters')
      .max(30, 'Too Long!')
      .required('E-Mail Is Empty')
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Emailis not correct"
      ),
    password: Yup.string()
      .min(8, 'Password must be more than 8 characters')
      .max(30, 'Too Long!')
      .required('Password Is Empty'),
  });

function Login() {
  const [data,setData]=useState([])
  const [drinks,setDrinks]=useState([])
useEffect(()=>{
  axios.get("http://localhost:4000/cakes")
  .then(res=>setData(res.data))
},[])

  return (
    <>
    <section id='loginsection'>
        <div className="container" id='logincontainer'>
         <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm}) => {
        if(values.email=="" || values.password==""){
          alert("its empty")
        }else{
          axios.post('http://localhost:4000/login-user',values)
          .then(res=>{console.log(res.data,"UserInfo");
        if(res.data.status=="ok"){
          alert("login successful")
        }
        })
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
            <h3>LOG IN</h3>
            <div>
            <AccountCircleIcon id="nameicon"/>
           <input
             type="text"
             name="email"
             onChange={handleChange}
             value={values.email}
             placeholder="Email"
           />
            {errors.email && touched.email? <div style={{color:"red",fontSize:12}}>{errors.email}</div>:null}
           </div>
           <div>

           <div>
            <LockIcon id="nameicon"/>
          
           <input
             type="password"
             name="password"
             placeholder='Password'
             onChange={handleChange}
             value={values.password}
           /> </div></div>
             {errors.password && touched.password? <div style={{color:"red",fontSize:12}}>{errors.password}</div>:null}
           <p><Link to="/login/resetpassword" id="signup">Forgot password?</Link></p>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button> <br />
           <h4>
         <Link to="/login/signup" id="signup">Or Sign Up</Link> </h4>
         </form>
       )}
     </Formik>
        </div>
    </section>
    
    </>
  )
}

export default Login
