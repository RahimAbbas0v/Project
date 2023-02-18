import React, { useEffect, useState } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import './Fastfood.css'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import axios from "axios"

function Fastfood() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/datas")
        .then(res=>setData(res.data))
    },[])
    
 useEffect(()=>{
    Aos.init({duration:500})
  },[])

    return (
        <>

            <section id='Fastfoodsection'>
            <div className="blog-head"  data-aos="fade-up" data-aos-delay="50">
                    <h2>RECENT FROM BLOG</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="container" id="fastfoodcontainer">
                    <div className="cards6">
                    {data.filter(x=>x.Category=="FastFood").map((item,index)=>(
                        <div className="card6" data-aos="zoom-up" data-aos-delay={index*100}>
                            <img src={item.ProductUrl} alt="" />
                            <div className="card-body">
                                <p id='datep'>Sept 10, 2018    Admin<span> <SpeakerNotesIcon id="commenticon"/> </span> 3</p>
                                <h3>{item.ProductName}</h3>
                                <p id='aboutp'>{item.ProductInfo}</p>
                            </div>
                        </div>))}
                        
                    </div></div>
            </section>
        </>
    )
}

export default Fastfood