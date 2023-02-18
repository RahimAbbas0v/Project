import React, { useEffect } from "react";
import "./Story.css";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed'
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 

function Story() {
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
    <>
    <section id="storysection">
        <div className="story">
          <div className="leftside"></div>
          <div className="rightside" >
            <div className="discover" data-aos="fade-up">
              <span>Discover</span>
              <h2>OUR STORY</h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Story



