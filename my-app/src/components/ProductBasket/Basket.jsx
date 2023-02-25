import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
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
import axios from "axios";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';
class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value,expiry,cvc } = e.target;
    
    this.setState({ [name]: value,[expiry]:value,[cvc]:value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength={16}
          /> <br />
          <input
            type="text"
            name="name"
            placeholder="Your Name Here"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength={16}
          /> <br />
          <div>
          <input
            type="number"
            name="expiry"
            placeholder="Valid thru "
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxLength={4}

          /> <br />
             <input
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            maxlength="3"
          /> 
          </div>
        </form>
      </div>
    );
  }
}
function Basket() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  useEffect(()=>{
    axios.get("http://localhost:4000/orders")
    .then(res=>console.log(res.data))
  },[])
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
  console.log(basket);
  const Buy=()=>{
    axios.post('http://localhost:4000/orders',basket)
    .then(res=>{
      alert("You Buy It")
    })
  }
  console.log(basket);
  return (
    <>
      <section className="basketSection">
        <div className="container" id="basketcontainer">
          <table data-aos="zoom" data-aos-delay='100'>
            <thead>
              <tr>
                <th style={{color:"rgb(199, 155, 99)"}}>|||||||||||</th>
                <th style={{color:"rgb(199, 155, 99)"}}>||||||||||||||||||||</th>
                <th id='th3' style={{paddingLeft:"7.1rem"}}>           Product</th>
                <th  style={{paddingLeft:"3.1rem"}}>Price</th>
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
          <div style={{justifyContent:"center",textAlign:"center"}}>  <MDBBtn onClick={toggleShow} id="btn2">LAUNCH DEMO MODAL</MDBBtn></div>
      <MDBModal show={basicModal} setShow={setBasicModal} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><PaymentForm/></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={Buy}>Payment</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
           </div>
           
      </section>
      
    </>
  );
}

export default Basket;
