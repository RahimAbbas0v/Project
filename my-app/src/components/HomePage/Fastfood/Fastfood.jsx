import React, { useEffect, useState } from 'react'
import './Fastfood.css'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import axios from "axios"


class RevealExample extends React.Component {
    render() {
      return (
        <><Reveal bottom>
           <div className="blog-head">
                    <h2>RECENT FROM BLOG</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div></Reveal>
                <Reveal top>

                </Reveal>
        </>
      );
    }
  }
  


function Fastfood() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/fastfood")
        .then(res=>setData(res.data))
    },[])
    return (
        <>

            <section id='Fastfoodsection'>
               <RevealExample/>
                <div className="container" id="fastfoodcontainer">
                    <div className="cards6">
                        {data.map((item,index)=>(

                        
                        <div className="card6">
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