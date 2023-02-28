import { Button } from "reactstrap";
import "./Info.css";
import CallIcon from "@mui/icons-material/Call";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'Too Long!')
    .required('First Name Is Empty'),
  lastname: Yup.string()
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
  phone: Yup.string()
    .min(10, 'Phone Number must be more than 10 characters')
    .max(30, 'Too Long!')
    .required('Phone Number Is Empty')
    .matches(/994(40|5[015]|60|7[07])\d{7}/, "Phone Number is not correct"),
    message: Yup.string()
    .required('Message Is Empty')
    .matches(/994(40|5[015]|60|7[07])\d{7}/, "Phone Number is not correct"),
});

function Info() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(JSON.parse(window.localStorage.getItem("item")));
  }, []);
  return (
    <>

      <section id="infosection">
        <div id="inforcontainer">
          <div className="left">
            <div className="phone" data-aos="fade-up" data-aos-delay={0}>
              <CallIcon id="icon" />
              <div>
                <h3>000 (123) 456 7890</h3>
                <p>
                  A small river named Duden flows by their place and
                  supplies.
                </p>
              </div>
            </div>

            <div className="address" data-aos="fade-up" data-aos-delay={100}>
              <MyLocationIcon id="icon" />
              <div>
                <h3>198 West 21th Street</h3>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>

            <div className="time" data-aos="fade-up" data-aos-delay={200}>
              <ScheduleIcon id="icon" />
              <div>
                <h3>Open Monday-Friday</h3>
                <p>8:00am - 9:00pm</p>
              </div>
            </div>

          </div><div className="right">
            <Formik
              initialValues={{
                name: "",
                lastname: "",
                date: "",
                clock: "",
                phone: "",
                message: "",
              }}
            validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {

                if (email) {
                  if (values.name == "" || values.lastname == "" || values.phone == "" || values.message == "" || values.date == "" || values.clock == "") {
                    alert("Fullfid inputs")

                  } else {
                    axios.post("http://localhost:4000/reservation", {
                      name: {
                        name: values.name,
                        lastname: values.lastname,
                        clock: values.clock,
                        date: values.date,
                        phone: values.phone,
                        message: values.message,
                      },
                      email: email.email

                    }).then()
                  }
                } else {
                  alert("First You Have to Login")
                }
                resetForm()
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} id="reservform" data-aos="fade-up"
                  data-aos-duration="500">
                  <h3>BOOK A TABLE</h3>
                  <div style={{ display: "flex" }}>
                    <div class="input-group mb-3" id="name" style={{ color: "white" }}>
<div style={{width:"47%"}}>
                      <input
                        style={{ color: "white" }}
                        type="text"
                        placeholder="First Name"
                        onChange={props.handleChange}
                        value={props.values.name}
                        name="name"
                      />
                          {props.errors.name && <div style={{ color: "red", fontSize: 12, }}>{props.errors.name}</div>}</div>
<div style={{width:"47%"}}>
                      <input
                        style={{ color: "white" }}
                        type="text"
                        placeholder="Last Name"
                        onChange={props.handleChange}
                        value={props.values.lastname}
                        name="lastname"
                      />
                          {props.errors.lastname && <div style={{ color: "red", fontSize: 12, }}>{props.errors.lastname}</div>}</div>

                    </div>
                  </div>
                  <div id="times">
                    <input
                      style={{ color: "white" }}
                      id='dateinput'
                      type="date"
                      min="2023-03-04" max="2023-05-04"
                      onChange={props.handleChange}
                      value={props.values.date}
                      name="date"
                    />
                    <select
                      style={{ color: "white" }}
                      class="form-select"
                      aria-label="Default select example"
                      onChange={props.handleChange}
                      value={props.values.clock}
                      name="clock"
                    >
                      <option selected>12:00am</option>
                      <option value="12:00am" style={{ color: "black" }}>12:00am</option>
                      <option value="12:30am" style={{ color: "black" }}>12:30am</option>
                      <option value="13:00am" style={{ color: "black" }}>13:00am</option>
                      <option value="13:30am" style={{ color: "black" }}>13:30am</option>
                      <option value="14:00am" style={{ color: "black" }}>14:00am</option>
                      <option value="14:30am" style={{ color: "black" }}>14:30am</option>
                      <option value="15:00am" style={{ color: "black" }}>15:00am</option>
                      <option value="15:30am" style={{ color: "black" }}>15:30am</option>
                      <option value="16:00am" style={{ color: "black" }}>16:00am</option>
                      <option value="16:30am" style={{ color: "black" }}>16:30am</option>
                      <option value="17:00am" style={{ color: "black" }}>17:00am</option>
                      <option value="17:30am" style={{ color: "black" }}>17:30am</option>
                      <option value="18:00am" style={{ color: "black" }}>18:00am</option>
                      <option value="18:30am" style={{ color: "black" }}>18:30am</option>
                      <option value="19:00am" style={{ color: "black" }}>19:00am</option>
                      <option value="19:30am" style={{ color: "black" }}>19:30am</option>
                      <option value="20:00am" style={{ color: "black" }}>20:00am</option>
                      <option value="20:30am" style={{ color: "black" }}>20:30am</option>
                      <option value="21:00am" style={{ color: "black" }}>21:00am</option>
                      <option value="21:30am" style={{ color: "black" }}>21:30am</option>
                      <option value="22:00am" style={{ color: "black" }}>18:30am</option>
                      <option value="22:30am" style={{ color: "black" }}>19:00am</option>
                      <option value="23:00am" style={{ color: "black" }}>19:30am</option>
                      <option value="23:30am" style={{ color: "black" }}>20:00am</option>
                      <option value="00:00pm" style={{ color: "black" }}>20:30am</option>
                      <option value="00:30pm" style={{ color: "black" }}>21:00am</option>
                      <option value="01:00pm" style={{ color: "black" }}>21:30am</option>

                    </select>
                    <div style={{display:"block"}}>
                    <input
                      style={{ color: "white" }}
                      type="number"
                      placeholder="Phone"
                      onChange={props.handleChange}
                      id="PhoneInput"
                      value={props.values.phone}
                      name="phone"
                    />
                  {props.errors.phone && <div style={{ color: "red", fontSize: 12 }}>{props.errors.phone}</div>}</div>
                  </div>
                  <div className="submit" >
                    <div style={{display:"block",width:"43%"}} >
                    <input
                      type="text"
                      id='btnInput'
                      placeholder="Message"
                      onChange={props.handleChange}
                      value={props.values.message}
                      name="message"
                      style={{ color: "white" }}
                    />
                          {props.errors.message && <div style={{ color: "red", fontSize: 12, }}>{props.errors.message}</div>}</div>

                    <button type="submit">Appoitment</button>
                  </div>

                </form>
              )}
            </Formik>
            {/* <form id="reservform">
                <h3>BOOK A TABLE</h3>
                <div style={{ display: "flex" }}>
                  <div class="input-group mb-3" id="name" style={{color:"white"}}>
                    <input
                     style={{color:"white"}}
                      type="text"
                      placeholder="First Name"
                      name="name"
                      onChange={handlenamechange}
                    />
                    <input
                     style={{color:"white"}}
                      type="text"
                      placeholder="Last Name"
                      onChange={handlelastname}
                      name="lastname"
                    />
                  </div>
                </div>
                <div  id="times">
                  <input
                     style={{color:"white",}}
                     id='dateinput'
                    type="date"
                    min="2023-03-04" max="2023-05-04"
                    onChange={handledate}
                    name="date"
                  />
                  <select
                  style={{color:"white"}}
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handleclock}
                    name="clock"
                  >
                    <option selected>12:00am</option>
                  <option value="12:00am" style={{color:"black"}}>12:00am</option>
                  <option value="12:30am" style={{color:"black"}}>12:30am</option>
                  <option value="13:00am" style={{color:"black"}}>13:00am</option>
                  <option value="13:30am" style={{color:"black"}}>13:30am</option>
                  <option value="14:00am" style={{color:"black"}}>14:00am</option>
                  <option value="14:30am" style={{color:"black"}}>14:30am</option>
                  <option value="15:00am" style={{color:"black"}}>15:00am</option>
                  <option value="15:30am" style={{color:"black"}}>15:30am</option>
                  <option value="16:00am" style={{color:"black"}}>16:00am</option>
                  <option value="16:30am" style={{color:"black"}}>16:30am</option>
                  <option value="17:00am" style={{color:"black"}}>17:00am</option>
                  <option value="17:30am" style={{color:"black"}}>17:30am</option>
                  <option value="18:00am" style={{color:"black"}}>18:00am</option>
                  <option value="18:30am" style={{color:"black"}}>18:30am</option>
                  <option value="19:00am" style={{color:"black"}}>19:00am</option>
                  <option value="19:30am" style={{color:"black"}}>19:30am</option>
                  <option value="20:00am" style={{color:"black"}}>20:00am</option>
                  <option value="20:30am" style={{color:"black"}}>20:30am</option>
                  <option value="21:00am" style={{color:"black"}}>21:00am</option>
                  <option value="21:30am" style={{color:"black"}}>21:30am</option>
                  <option value="22:00am" style={{color:"black"}}>18:30am</option>
                  <option value="22:30am" style={{color:"black"}}>19:00am</option>
                  <option value="23:00am" style={{color:"black"}}>19:30am</option>
                  <option value="23:30am" style={{color:"black"}}>20:00am</option>
                  <option value="00:00pm" style={{color:"black"}}>20:30am</option>
                  <option value="00:30pm" style={{color:"black"}}>21:00am</option>
                  <option value="01:00pm" style={{color:"black"}}>21:30am</option>

                  </select>
                  <input
                  style={{color:"white"}}
                    type="number"
                    placeholder="Phone"
                    onChange={handlephone}
                    name="phone"
                  />
                </div>
                <div className="submit">
                <input
                      type="text"
                      placeholder="Message"
                      onChange={handlemessage}
                      name="message"
                      style={{color:"white"}}
                    />
                    <button type="reset" onClick={handlesubmit} >Appoitment</button>
                </div>
                
              </form> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Info
