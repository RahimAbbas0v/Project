

import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import { Button } from '@carbon/react';
import './Map.css'
import { Formik } from 'formik';
import axios from "axios"

function Map() {

  useEffect(()=>{
    Aos.init({duration:500})
  },[])


    return (
    <>
      <section id="mapsection">
        <div class="mapdiv">
          
            <iframe
              id="gmap_canvas1"
              src="https://maps.google.com/maps?q=CodeAca&t=&z=20&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          <div id="formdiv">
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
                  <form onSubmit={props.handleSubmit} id="reservform2" data-aos="fade-up"
                  data-aos-duration="500">
                    <h3>BOOK A TABLE</h3>
                    <div style={{ display: "flex" }}>
                      <div class="input-group mb-3" id="name2" style={{color:"white"}}>
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
                    <div  id="times2">
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
                    <div className="submit2">
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

export default Map