import React, { useEffect, useState } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import "./Coffe.css";
import {useSelector,useDispatch} from "react-redux/es/exports" ;
import axios from "axios"
import {AddToBasket} from "../../reducers/BasketSlice"
function Coffes() {
  const basket=useSelector(state=>state.basket.value)
  const count=useSelector(state=>state.basket.count)
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/datas")
    .then(res=>setData(res.data))
  },[])
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  const AddBasket=(item)=>{
    dispatch(AddToBasket(item))
  }
  console.log(basket);
  console.log(count);
  return (
    <section id="coffesection">
         <div className="headname" data-aos="fade-up" data-aos-delay={100}>
        <span>Discover</span>
        <h2>BEST COFFEE SELLERS</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="container" id="coffecontainer">
        <div className="cards3">
        {data.filter(x=>x.Category=="Coffe").map((item,index)=>(
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
              <button onClick={()=>AddBasket(item)}>Add to Cart</button>
            </div>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Coffes;
