import React, { useEffect } from "react";
import "./Youtube.css";
import Iframe from "react-iframe";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
function Youtube() {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <>
      <section id="storysection">
        <div className="youtube">
            <div className="video"  data-aos="zoom-in" >
              <span>Discover</span>
              <h2>Our Youtube Channel</h2>
              <Iframe
             
                url="https://www.youtube.com/embed/6YYyHf2Ok6s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                id=""
                className=""
              />
            </div>
        </div>
      </section>
    </>
  );
}

export default Youtube;
