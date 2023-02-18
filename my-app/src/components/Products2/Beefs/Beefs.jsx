import React, { useEffect, useState } from "react";
import "./Beefs.css";
import axios from "axios"
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 

function Beefs() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/datas")
    .then(res=>setData(res.data))
  },[])
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
  return (
    <section id="beefsection">
      <div className="container" id="beefcontainer">
        <div className="cards4">
        {data.filter(x=>x.Category=="Beef").slice(0,6).map((item,index)=>(
            <div className="card4" key={index}  data-aos="fade-up" data-aos-delay={index*100}>
            <img
              src={item.ProductUrl}
              alt=""
            />
            <div className="card-body">
              <h3>{item.ProductName}</h3>
              <p>{item.ProductInfo}</p>
              <p>
                <span>${item.ProductPrice}</span>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Beefs;