import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UserViewPage.css'
function ProductViewPage() {
    let {Id}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:4000/userData/${Id}`)
        .then(res=>setData(res.data))
    },[])
    const BackProduct=()=>{
        navigate("/admin/customers")
    }
  return (
    <div className="viewDiv">

        <div className="details" key={data._id}>
          <div className="big-img">
            <img src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' alt=""/>
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.firstname}</h2>
              <span style={{color:"black"}}>{data.lastname}</span>
            </div>
            

            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>


            <button className="cart" onClick={BackProduct}>Go Back</button>

          </div>
        </div>
  </div>
  )
}

export default ProductViewPage
