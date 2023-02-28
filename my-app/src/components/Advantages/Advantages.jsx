import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import { Button } from "reactstrap";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Fade from 'react-reveal/Fade';
import "./Advantages.css";

function Advantages() {
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
  return (
    <section id="advantagesection">
        <div className="container" id="advantages">
        
          <div className="cards">
          <div className="card1" data-aos="fade-right"  >
              <span id="iconspan">
                <LibraryBooksIcon id="advantagesicon" />
              </span>

              <div className="card-body">
                <h3>EASY TO ORDER</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
            <div className="card1" data-aos="fade-right" data-aos-delay="100"  >
              <span id="iconspan">
                <DepartureBoardIcon id="advantagesicon" />
              </span>

              <div className="card-body">
                <h3>FASTEST DELIVERY</h3>
                <p>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
              </div>
            </div>

          <div className="card1" data-aos="fade-right" data-aos-delay="200"  >
            <span id="iconspan">
              <EmojiFoodBeverageIcon id="advantagesicon" />
            </span>

            <div className="card-body">
              <h3>QUALITY COFFEE</h3>
              <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div></div>
          </div>
        </div>
      </section>
  )
}

export default Advantages
