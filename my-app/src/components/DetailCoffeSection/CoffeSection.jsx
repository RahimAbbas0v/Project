import React, { useEffect, useState } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import "./CoffeSection.css";
import axios from "axios"
function Coffes() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/coffes")
    .then(res=>setData(res.data))
  },[])
  useEffect(()=>{
    Aos.init({duration:500})
  },[])

  return (
    <section id="coffesection2">
         <div className="headname" data-aos="fade-up" data-aos-delay={100}>
        <span>Discover</span>
        <h2>RELATED PRODUCTS</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="container" id="coffecontainer">
        <div className="cards3">
          {data.map((item,index)=>(
          <div className="card3" key={index} data-aos="flip-right" data-aos-delay={index*100}>
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

export default Coffes;
