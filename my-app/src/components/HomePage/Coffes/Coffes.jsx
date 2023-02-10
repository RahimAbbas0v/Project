import React, { useEffect, useState } from "react";
import "./Coffe.css";
import axios from "axios"


import ScrollAnimation from 'react-animate-on-scroll';

import Reveal from 'react-reveal/Reveal';
class RevealExample extends React.Component {
  render() {
    return (
        <Reveal bottom>
        <div className="headname">
        <span>Discover</span>
        <h2>BEST COFFEE SELLERS</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
        </Reveal>
    );
  }
}

function Coffes() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/coffes")
    .then(res=>setData(res.data))
  },[])
  return (
    <section id="coffesection">
        <RevealExample/>
      <div className="container" id="coffecontainer">
        <div className="cards3">
          {data.map((item,index)=>(
          <div className="card3" key={index}>
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
