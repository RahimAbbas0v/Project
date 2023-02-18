import React, { useEffect, useState } from "react";
import "./Coffe.css";
import axios from "axios"
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import { useNavigate } from "react-router-dom";
import { Link } from "@carbon/react";

function Drinks() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/datas")
    .then(res=>setData(res.data))
  },[])
 useEffect(()=>{
    Aos.init({duration:500})
  },[])
  const navigate=useNavigate()
  const handleView=(_Id)=>{
    navigate(`/details/${_Id}`)
  }
  return (
    <section id="drinksection">
      <div className="container" id="drinkcontainer">
        <div className="cards4">
        {data.filter(x=>x.Category=="Coffe").slice(0,6).map((item,index)=>(
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
              <button onClick={()=>handleView(item._id)}>Info ...</button>
              <button> Add to Cart</button>
            </div>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Drinks;