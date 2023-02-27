import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aos from "aos"
import "./ProductDetail.css"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import CoffeSection from "../DetailCoffeSection/CoffeSection"
import {DeleteFromBasket,AddToBasket,IncrementByUser} from "../../reducers/BasketSlice"
import {useSelector,useDispatch} from "react-redux/es/exports"
function ProductDetail() {
  let { Id } = useParams();
  let [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/datas/${Id}`)
      .then(res=>setData(res.data))
  },[]);

  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.value)
  const handledelete=(itemId)=>{
    dispatch(DeleteFromBasket(itemId))
  }
  
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate("/shop")
  }
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  const AddBasket=(item)=>{
    dispatch(AddToBasket(item))
    dispatch(IncrementByUser(count))
  }
  return (
    <section id="detailSection">
      <div className="container" id="detailcontainer1">
        <div className="leftimg">
          <img src={data.ProductUrl} alt="" data-aos="zoom-in" data-aos-delay="100" />
        </div>
        <div className="rightinfocard" data-aos="fade-left" data-aos-delay="150">
          <h3>{data.ProductName}</h3>
          <span>${data.ProductPrice}</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            {" "}
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <select name="cars" id="cars">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>{" "}
            <br />
            <div style={{display:"flex",gap:"30px"}}>
            <button type="submit" onClick={()=>AddBasket(data)}>Add to Cart</button>
            <button type="submit" onClick={handleBack} style={{background:"transparent",borderColor:"white",color:"white"}}>Go back</button></div>
          </form>
        </div>
      </div>
      <CoffeSection/>
    </section>
  )
}

export default ProductDetail;
