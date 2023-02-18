import React, { useEffect, useState } from "react";
import "./Cakes.css";
import axios from "axios"
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import { useNavigate } from "react-router-dom";

function Cake() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/datas")
    .then(res=>setData(res.data))
  },[])
 useEffect(()=>{
    Aos.init({duration:500})
  },[])
  const navigate=useNavigate()
  const handleView=(item)=>{
    navigate(`/details/${item._id}`)
  }
  return (
    <section id="cakesection">
      <div className="container" id="cakecontainer">
        <div className="cards4">
        {data.filter(x=>x.Category=="Dessert").slice(0,6).map((item,index)=>(
          <div className="card4" key={index} data-aos="fade-up" data-aos-delay={index*100}>
             
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
              <button  onClick={()=>handleView(item)}>Info ...</button>
              <button>Add to Cart</button>
            </div>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Cake;