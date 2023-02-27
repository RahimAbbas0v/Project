import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductViewPage.css'
function ProductViewPage() {
    let {Id}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:4000/datas/${Id}`)
        .then(res=>setData(res.data))
    },[])
    const BackProduct=()=>{
        navigate("/admin/products")
    }
  return (
    <div className="viewDiv">

        <div className="details" key={data._id}>
          <div className="big-img">
            <img src={data.ProductUrl} alt=""/>
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.ProductName}</h2>
              <span>${data.ProductPrice}</span>
            </div>
            

            <p>{data.ProductInfo}</p>
            <p>{data.Category}</p>

            <button className="cart" onClick={BackProduct}>Go Back</button>

          </div>
        </div>
  </div>
  )
}

export default ProductViewPage
