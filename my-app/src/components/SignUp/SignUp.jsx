import { Formik } from 'formik';
import React from 'react'
import Dialog from 'react-dialog'
import "./SignUp.css"
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'First Name must be more than 2 characters')
    .max(30, 'Too Long!')
    .required('First Name Is Empty'),
  lastname: Yup.string()
    .min(2, 'Last Name must be more than 2 characters')
    .max(30, 'Too Long!')
    .required('Last Name Is Empty'),
  email: Yup.string()
    .min(6, 'E-Mail must be more than 6 characters')
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
  phone: Yup.string()
    .min(10, 'Phone Number must be more than 10 characters')
    .max(30, 'Too Long!')
    .required('Phone Number Is Empty')
    .matches(/994(40|5[015]|60|7[07])\d{7}/, "Phone Number is not correct"),
  address: Yup.string()
    .min(10, 'Address must be more than 10 characters')
    .max(30, 'Too Long!')
    .required('Address Is Empty'),
});


function SignUp() {
  return (
    <>
      <section id='loginsection'>
        <div className="container" id='signupcontainer'>
          <Formik
            initialValues={{ email: '', password: '', firstname: '', phone: "", lastname: '', address: '', UserType: '', Key: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              if(values.UserType=="Admin" && values.Key!='Admin123'){
                alert("Key Is Wrong")
              }else{

            
              if (values.firstname == "" || values.lastname == "" || values.email == "" || values.password == "" || values.phone == "" || values.address == "") {
                alert("its empty")
              } else {
                axios.post('http://localhost:4000/register', values)
                  .then(res => {
                    console.log(res.data, "UserInfo");
                    if (res.data.status == 201) {
                      alert("Sign up successful")
                      window.location.href = "./"
                    }
                  })
              }  
              resetForm()
              console.log(values);}
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
                <h3>SIGN UP</h3>
                <div className="radio">
                  <label htmlFor="">User
                    <input
                      type="radio"
                      name="UserType"
                      onChange={handleChange}
                      value="User"
                      placeholder='User'
                    /></label>
                  <label htmlFor="">Admin
                    <input
                      type="radio"
                      name="UserType"
                      onChange={handleChange}
                      value="Admin"
                      placeholder='User'
                    /></label></div>


                {values.UserType == "Admin" ?
                  <div id='firstrow'>
                    <KeyIcon id="nameicon" />
                    <input
                      type="text"
                      name="Key"
                      onChange={handleChange}
                      value={values.Key}
                      placeholder="Admin Key"
                    /></div> : null

                }

                <div id='firstrow'>
                  <AccountCircleIcon id="nameicon" />
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    value={values.firstname}
                    placeholder="First Name"
                  />
                  {errors.firstname && touched.lastname ? <div style={{ color: "red", fontSize: 12 }}>{errors.firstname}</div> : null}
                </div>
                <div>
                  <AccountCircleIcon id="nameicon" />
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    value={values.lastname}
                    placeholder="Last Name"
                  />
                  {errors.lastname && touched.lastname ? <div style={{ color: "red", fontSize: 12 }}>{errors.lastname}</div> : null}
                </div>
                <div>

                  <div>
                    <MailOutlineIcon id="nameicon" />

                    <input
                      type="text"
                      name="email"
                      placeholder='E-Mail'
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email ? <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div> : null}
                  </div>

                  <div>
                    <LockIcon id="nameicon" />

                    <input
                      type="password"
                      name="password"
                      placeholder='Password'
                      onChange={handleChange}
                      value={values.password}

                    />  {errors.password && touched.password ? <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div> : null}</div>

                  <div>
                    <PhoneIcon id="nameicon" />

                    <input
                      type="text"
                      name="phone"
                      placeholder='Phone Number'
                      onChange={handleChange}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone ? <div style={{ color: "red", fontSize: 12 }}>{errors.phone}</div> : null}
                  </div>
                  <div>
                    <LocationOnIcon id="nameicon" />

                    <input
                      type="text"
                      name="address"
                      placeholder='Shipping Address'
                      onChange={handleChange}
                      value={values.address}
                    />
                    {errors.address && touched.address ? <div style={{ color: "red", fontSize: 12 }}>{errors.address}</div> : null}
                  </div>


                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button> <br />
                <h4>
                  <Link to="/login/" id="signup">Back To Login Page</Link> </h4>
              </form>
            )}
          </Formik>
        </div>
      </section>

    </>
  )
}

export default SignUp

