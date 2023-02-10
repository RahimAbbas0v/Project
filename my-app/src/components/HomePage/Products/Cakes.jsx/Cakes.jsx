import React, { useEffect, useState } from "react";
import "./Cakes.css";
import axios from "axios"


function Cake() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/cakes")
    .then(res=>setData(res.data))
  },[])
  return (
    <section id="cakesection">
      <div className="container" id="cakecontainer">
        <div className="cards4">
          {data.slice(0,3).map((item,index)=>(
          <div className="card4" key={index}>
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

export default Cake;