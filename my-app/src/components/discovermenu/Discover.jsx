import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import "./Discover.css";
import { Button } from "reactstrap";

function Discover() {
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
    <>
      <section className="discoversection">
        <div className="container" id="discovercontainer">
          <div id="left" data-aos="fade-up" data-aos-delay={0}>
            <span>Discover</span>
            <h2>OUR MENU</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>      <button>View Full Menu</button>
          </div>
          <div id="right">
            <div className="img1" data-aos="zoom-in" data-aos-delay={50}>
              <img
                src="https://themewagon.github.io/coffee1/images/menu-1.jpg"
                alt=""
              />
            </div>
            <div className="img2" data-aos="zoom-in" data-aos-delay={150}>
              <img
                src="https://themewagon.github.io/coffee1/images/menu-2.jpg"
                alt=""
              />
            </div>
            <div className="img3" data-aos="zoom-in" data-aos-delay={50}>
              <img
                src="https://themewagon.github.io/coffee1/images/menu-4.jpg"
                alt=""
              />
            </div>
            
            <div className="img4" data-aos="zoom-in" data-aos-delay={150}>
              <img
                src="https://themewagon.github.io/coffee1/images/menu-3.jpg"
                alt=""
              />
            </div>
      
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
