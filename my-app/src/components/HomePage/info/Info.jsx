import { Button } from "reactstrap";
import "./Info.css";
import CallIcon from "@mui/icons-material/Call";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Field, Formik } from "formik";
import DatePicker from "react-datepicker";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import "react-datepicker/dist/react-datepicker.css";

class RevealExample extends React.Component {
  render() {
    return (
      <>
        <section id="infosection">
          <div id="inforcontainer">
            <div className="left">
              <Reveal bottom>
                <div className="phone">
                  <CallIcon id="icon" />
                  <div>
                    <h3>000 (123) 456 7890</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
                <div className="address">
                  <MyLocationIcon id="icon" />
                  <div>
                    <h3>198 West 21th Street</h3>
                    <p>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>
                  </div>
                </div>
                <div className="time">
                  <ScheduleIcon id="icon" />
                  <div>
                    <h3>Open Monday-Friday</h3>
                    <p>8:00am - 9:00pm</p>
                  </div>
                </div>
              </Reveal>

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
                onSubmit={(values, {resetForm}) => {

                  resetForm()
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit} id="reservform">
                    <h3>BOOK A TABLE</h3>
                    <div style={{ display: "flex" }}>
                      <div class="input-group mb-3" id="name" style={{color:"white"}}>
                        <input
                         style={{color:"white"}}
                          type="text"
                          placeholder="First Name"
                          onChange={props.handleChange}
                          value={props.values.name}
                          name="name"
                        />
                        <input
                         style={{color:"white"}}
                          type="text"
                          placeholder="Last Name"
                          onChange={props.handleChange}
                          value={props.values.lastname}
                          name="lastname"
                        />
                      </div>
                    </div>
                    <div  id="times">
                      <input
                         style={{color:"white"}}
                        type="date"
                        onChange={props.handleChange}
                        value={props.values.date}
                        name="date"
                      />
                      <select
                      style={{color:"white"}}
                        class="form-select"
                        aria-label="Default select example"
                        onChange={props.handleChange}
                        value={props.values.clock}
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
                        onChange={props.handleChange}
                        value={props.values.phone}
                        name="phone"
                      />
                    </div>
                    <div className="submit">
                    <input
                          type="text"
                          placeholder="Message"
                          onChange={props.handleChange}
                          value={props.values.message}
                          name="message"
                          style={{color:"white"}}
                        />
                        <button type="submit">Appoitment</button>
                    </div>
                    
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default RevealExample;
