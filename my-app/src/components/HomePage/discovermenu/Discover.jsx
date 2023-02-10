import React from "react";
import "./Discover.css";
import { Button } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Fade from 'react-reveal/Fade';
function Discover() {
  return (
    <>
      <section className="discoversection">
        <div className="container" id="discovercontainer">
          <Fade left >
          <div id="left">
            <span>Discover</span>
            <h2>OUR STORY</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>      <button>View Full Menu</button>
          </div></Fade>
          <div id="right">
            <div className="img1">
              <img
                src="https://themewagon.github.io/coffee1/images/menu-1.jpg"
                alt=""
              />
            </div>
            <div className="img2">
              <img
                src="https://themewagon.github.io/coffee1/images/menu-2.jpg"
                alt=""
              />
            </div>
            <div className="img3">
              <img
                src="https://themewagon.github.io/coffee1/images/menu-4.jpg"
                alt=""
              />
            </div>
            <div className="img4">
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
