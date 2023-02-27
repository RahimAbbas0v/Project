import React from 'react'
import './AddPage.css'
import { Formik } from 'formik'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
 function AddPage() {
    const navigate=useNavigate()
   return (
     <div>
       <Formik
       initialValues={{ ProductName: '', ProductInfo: '',ProductPrice:'',ProductUrl:'',Category:'' }}
       onSubmit={(values, { resetForm }) => {
        if(values.ProductName=="" || values.ProductInfo=="" || values.ProductPrice=="" || values.ProductUrl=="" || values.Category==""){
            alert("Inputs Empty")
        }else{
            axios.post("http://localhost:4000/datas",values)
            .then(res=>{
           
navigate("/admin/products")
            })
        }
      resetForm()
       }}
     >
       {({
         values,
         errors,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}id='AddForm'>
           <input
             type="text"
             placeholder='ProductName'
             name="ProductName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.ProductName}
           />
           <input
             type="text"
             placeholder='ProductUrl'
             name="ProductUrl"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.ProductUrl}
           />
            <input
             type="text"
             placeholder='ProductPrice'
             name="ProductPrice"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.ProductPrice}
           />
           <input
             type="text"
             placeholder='Category'
             name="Category"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Category}
           />
                      <input
             type="text"
             placeholder='ProductInfo'
             name="ProductInfo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.ProductInfo}
           />
           <div id='submitBtn'>
            <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </div>
           
         </form>
       )}
     </Formik>
     </div>
   )
 }
 
 export default AddPage
 