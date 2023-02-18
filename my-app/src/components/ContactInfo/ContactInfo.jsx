import { Formik } from 'formik'
import React from 'react'
import "./Contactinfo.css"
function ContactInfo() {
  return (
    <>
<section id='Contactinfo'>
    <div className="container" id='contactcontainer'>
        <div className="leftinfo">
            <h3>Contact Information</h3>
            <p id='addressp'><span id='addressspan'>Address : </span> 198 West 21th Street, Suite 721 New York NY 10016</p>
        <p><span>Phone : </span> + 1235 2355 98</p>
        <p><span>Email : </span> info@yoursite.com</p>
        <p><span>Website : </span> yoursite.com</p>
        </div>
        <div id="formdiv2">
          <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={(values, {resetForm}) => {

                  resetForm()
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit} id="reservform3">
                    <div style={{ display: "flex" }}>
                      <div class="input-group mb-3" id="firstinputs" style={{color:"white"}}>
                        <input
                         style={{color:"white"}}
                          type="text"
                          placeholder="Your Name"
                          onChange={props.handleChange}
                          value={props.values.name}
                          name="name"
                        />
                        <input
                         style={{color:"white"}}
                          type="email"
                          placeholder="Your Email"
                          onChange={props.handleChange}
                          value={props.values.email}
                          name="email"
                        />
                      </div>
                    </div>
                    <div  id="subject">
                      <input
                         style={{color:"white"}}
                         placeholder="Subject"
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.subject}
                        name="subject"
                      />
                      
                    </div>
                    <div className="textarea">
                    <input
                          type="text"
                          placeholder="Message"
                          onChange={props.handleChange}
                          value={props.values.message}
                          name="message"
                          style={{color:"white"}}
                        />
                    </div>
                    <button>Send Message</button>
                  </form>
                )}
              </Formik>
          </div>
    </div>

</section>
<iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=CodeAca&t=&z=20&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
</>
  )
}

export default ContactInfo
