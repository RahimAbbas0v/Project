import React, { useEffect, useState } from "react";
import "./Drinks.css";
import axios from "axios"
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux/es/exports" ;
import {AddToBasket} from "../../../reducers/BasketSlice";
function Drinks() {
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
  const navigate=useNavigate()
  const handleView=(item)=>{
    navigate(`/details/${item._id}`)
  }
  const AddBasket=(item)=>{
    dispatch(AddToBasket(item))
  }
  return (
    <section id="drinksection">
      <div className="container" id="drinkcontainer">
        <div className="cards4">
        {data.filter(x=>x.Category=="Drink").slice(0,6).map((item,index)=>(
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
              <button onClick={()=>handleView(item)}>Info ...</button>
              <button onClick={()=>AddBasket(item)}>Add to Cart</button>
            </div>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Drinks;