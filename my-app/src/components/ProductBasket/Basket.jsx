import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./Basket.css";
import ClearIcon from '@mui/icons-material/Clear';
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import CoffeSection from "../../components/DetailCoffeSection/CoffeSection"
import {DeleteFromBasket,DecreaseItem,IncreaseItem} from "../../reducers/BasketSlice"
import {useSelector,useDispatch} from "react-redux/es/exports"
function Basket() {
  useEffect(()=>{
    Aos.init({duration:600})
  },[])
  const [total,setTotal]=useState(0.0)
  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.value)
  const handledelete=(itemId)=>{
    dispatch(DeleteFromBasket(itemId))
  }
  const Decrase=(itemId)=>{
    dispatch(DecreaseItem(itemId))
  }
  const Increase=(itemId)=>{
    dispatch(IncreaseItem(itemId))
  }
  return (
    <>
      <section className="basketSection">
        <div className="container" id="basketcontainer">
          <table data-aos="zoom" data-aos-delay='100'>
            <thead>
              <tr>
                <th style={{color:"rgb(199, 155, 99)"}}>|||||||||||</th>
                <th style={{color:"rgb(199, 155, 99)"}}>||||||||||||||||||||</th>
                <th style={{paddingLeft:"11.1rem"}}>           Product</th>
                <th style={{paddingLeft:"3.1rem"}}>Price</th>
                <th style={{paddingLeft:"4.1rem"}}>Quantity</th>
                <th style={{paddingLeft:"3rem"}}>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map((item)=>(
                <tr>
                    <td>
                        <span id='removebtn' onClick={()=>handledelete(item.data._id)}><ClearIcon id='icondel'/></span>
                    </td>
                    <td>
                        <img src={item.data.ProductUrl} alt="" />
                    </td> <td style={{paddingRight:"3rem",marginRight:"2rem"}}>
                        <h3>{item.data.ProductName}</h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                    </td> <td>
                        <h4>{item.data.ProductPrice}</h4>
                    </td> <td><div id="countProduct" >
                        <span style={{padding:".5rem",}} onClick={()=>Decrase(item.data._id)}>-</span><span id="countspan">{item.counter}</span ><span style={{padding:".5rem"}} onClick={()=>Increase(item.data._id)} >+</span></div>
                    </td> <td>
                        <span>${(item.data.ProductPrice*item.counter).toFixed(2)}</span>
                    </td>
                </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        <div className="totalprice">
          <div id="pricetable" >
            <h3>CART TOTALS</h3>
            <div className="row1">
                  <p>Subtotal</p>
              <p>${basket.reduce((total, item)=>total+(item.data.ProductPrice*item.counter),0).toFixed(2)}</p>
            </div>
            <div className="row1">
              <p>Delivery</p>
              <p>$0.00</p>
            </div>
            <div className="row1">
              <p>Discount</p>
              <p>$3.00</p>
            </div>
            <hr />
            <div className="row1" id="uprow">
              <p>TOTAL</p>
              <p style={{color:"rgb(199,155,99)",paddingLeft:".5rem"}}>${(basket.reduce((total, item)=>total+(item.data.ProductPrice*item.counter),0)-3).toFixed(2)}</p>
            </div>
          </div>
           <button id="btn2">Procced to Checkout</button></div>
      </section>
    </>
  );
}

export default Basket;
