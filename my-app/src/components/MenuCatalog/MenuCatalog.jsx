import React, { useEffect, useState } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import "./MenuCatalog.css"
import axios from "axios"
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";

function MenuCatalog() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/datas')
        .then((res)=>setData(res.data))
    },[])

    
 useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
    <>
    <section id='menusection'>
        <div className="container" id="catalog">
            <div className="firstrow">
                <div className="category">
                    
                    <h3 data-aos="zoom-in-up">STARTER</h3>
                      {data.filter(x=>x.Category=="Starter").slice(0,4).map((item,index)=>(
                             <div className="card1" data-aos="zoom-in-up" data-aos-delay={index*80}>
                        <img src={item.ProductUrl} alt="" />
                        <div className="card-body">
                            <div style={{display:"flex"}}>
                            <h4>{item.ProductName}</h4><span id='lines'>_ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span><span id='price'>${item.ProductPrice}</span></div>
                            <p>A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                        ))
                    }   
                </div>
                <div className="category">
               
                    <h3 data-aos="zoom-in-up">MAIN DISH</h3>
                    {data.filter(x=>x.Category=="Beef").slice(2,6).map((item,index)=>(
                             <div className="card1" data-aos="zoom-in-up" data-aos-delay={index*80}>
                        <img src={item.ProductUrl} alt="" />
                        <div className="card-body">
                            <div style={{display:"flex"}}>
                            <h4>{item.ProductName}</h4><span id='lines'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span><span id='price'>${item.ProductPrice}</span></div>
                            <p>A small river named Duden flows by their place and supplies</p>
                        </div>
                    </div>
                        ))
                    } 
                    
                </div>
                
            </div>
            <div className="firstrow">
                <div className="category">
                    <h3 data-aos="zoom-in-up" >DESSERTS</h3>
                    {data.filter(x=>x.Category=="Dessert").slice(1,5).map((item,index)=>(
                             <div className="card1" data-aos="zoom-in-up" data-aos-delay={index*80}>
                        <img src={item.ProductUrl} alt="" />
                        <div className="card-body">
                            <div style={{display:"flex"}}>
                            <h4>{item.ProductName}</h4><span id='lines'> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span><span id='price'>${item.ProductPrice}</span></div>
                            <p>A small river named Duden flows by their place and supplies</p>

                        </div>
                    </div>
                        ))
                    }   
                </div>
                <div className="category">
              
                    <h3 data-aos="zoom-in-up">DRINKS</h3>
                       {data.filter(x=>x.Category=="Drink").slice(2,6).map((item,index)=>(
                             <div className="card1" data-aos="zoom-in-up" data-aos-delay={index*80}>
                        <img src={item.ProductUrl} alt="" />
                        <div className="card-body">
                            <div style={{display:"flex"}}>
                            <h4>{item.ProductName}</h4><span id='lines'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span><span id='price'>${item.ProductPrice}</span></div>
                            <p>A small river named Duden flows by their place and supplies</p>

                        </div>
                    </div>
                        ))
                    }   
                    
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default MenuCatalog
