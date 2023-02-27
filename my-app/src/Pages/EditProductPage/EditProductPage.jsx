import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik';
import axios from 'axios';
import './EditProductPage.css'
function EditProductPage() {
    let {Id}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:4000/datas/${Id}`)
        .then(res=>{
            setName(res.data.ProductName)
            setPrice(res.data.ProductPrice)
            setUrl(res.data.ProductUrl)
            setInfo(res.data.ProductInfo)
            setCategory(res.data.Category)
        })
    },[])
    const BackProduct=()=>{
        navigate("/admin/products")
    }
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [info, setInfo] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const handlenamechange = (e) => {
      setName(e.target.value);
    };
    const handlepricechange = (e) => {
      setPrice(e.target.value);
    };
    const handleInfo = (e) => {
      setInfo(e.target.value);
    };
      const handleurl = (e) => {
        setUrl(e.target.value);
      };
      const handleCategory = (e) => {
        setCategory(e.target.value);
      };

    const handlesubmit =(e)=>{
      e.preventDefault()
      if (name==""|| price=="" || info=="" || url=="" || category=="") {
    alert("Input Empty")
    }else{
        axios.put(`http://localhost:4000/datas/${Id}`,{
            ProductName: name,
            ProductPrice: price,
            ProductInfo: info,
            ProductUrl:url,
            Category:category,
          })
          .then()
          .then((res)=>console.log(res.data))}
          alert("Edited")
    }
    return (
       <>
       <div id="ProductEdit">
          <form action="">
        <input
          type="text"
          name="name"
          onChange={handlenamechange}
          class="form-control"
          placeholder="Product Name"
          defaultValue={name}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="Price"
          defaultValue={price}
          onChange={handlepricechange}
          class="form-control"
          aria-label="Default"
          placeholder="Product Price"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="info"
          defaultValue={info}
          onChange={handleInfo}
          class="form-control"
          aria-label="Default"
          placeholder="Storage"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="url"
          defaultValue={url}
          onChange={handleurl}
          class="form-control"
          aria-label="Default"
          placeholder="Storage"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="text"
          name="category"
          defaultValue={category}
          onChange={handleCategory}
          class="form-control"
          aria-label="Default"
          placeholder="Storage"
          aria-describedby="inputGroup-sizing-default"
        />
       <button onClick={handlesubmit} id='editbtn'>Save</button>
      </form></div>
       
       </>
    )
}

export default EditProductPage
