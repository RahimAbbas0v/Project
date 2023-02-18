import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import SearchIcon from '@mui/icons-material/Search';
import "./Photos.css";

function Photos() {
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
   
      
         <section id="photosection">
        <div className="photos">
          <div className="photo" data-aos="fade-right" data-aos-delay="60">
            <img src="https://themewagon.github.io/coffee1/images/gallery-1.jpg" alt="" />
            <div className="searchicon">
                <span id="searchspan" ><SearchIcon id="iconn"/></span>
            </div>
          </div>
          <div className="photo" data-aos="fade-up" data-aos-delay="60">
            <img src="https://themewagon.github.io/coffee1/images/gallery-2.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div>
          <div className="photo" data-aos="fade-down" data-aos-delay="60">
            <img src="https://themewagon.github.io/coffee1/images/gallery-3.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div>
        <div className="photo" data-aos="fade-up" data-aos-delay="60">
            <img src="https://themewagon.github.io/coffee1/images/gallery-4.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div>
        </div>
      </section>
  
  )
}

export default Photos

