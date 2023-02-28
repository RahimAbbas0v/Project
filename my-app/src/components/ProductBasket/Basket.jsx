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
import { DeleteFromBasket, DecreaseItem, IncreaseItem,clearCart } from "../../reducers/BasketSlice"
import { useSelector, useDispatch } from "react-redux/es/exports"
import axios from "axios";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

function Basket() {
  const data = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  const [cardDetails, setCardDetails] = React.useState(data);

  const handleInputFocus = (e) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  useEffect(() => {
    axios.get("http://localhost:4000/orders")
      .then(res => console.log(res.data))
  }, [])
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
const navigate=useNavigate()
  const [total, setTotal] = useState(0.0)
  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket.value)
  const CleanBasket=useSelector(state=>state.basket)
  const handledelete = (itemId) => {
    dispatch(DeleteFromBasket(itemId))
  }
  const Decrase = (itemId) => {
    dispatch(DecreaseItem(itemId))
  }
  const Increase = (itemId) => {
    dispatch(IncreaseItem(itemId))
  }
  console.log(basket);
  const Buy = () => {
    if(cardDetails.cvc=="" || cardDetails.expiry=='' || cardDetails.name =='' ||cardDetails.number=="" ){
      alert("Fulfid All Data")
    }else{
      axios.post('http://localhost:4000/orders', basket)
      .then(res => {
        alert("Payment accepted")
        
        navigate('/')
      })
      dispatch(clearCart())
    }
    
  }
 
  console.log(basket);
  return (
    <>
      <section className="basketSection">
        <div className="container" id="basketcontainer">
          <table data-aos="zoom" data-aos-delay='100'>
            <thead>
              <tr>
                <th style={{ color: "rgb(199, 155, 99)" }}>|||||||||||</th>
                <th style={{ color: "rgb(199, 155, 99)" }}>||||||||||||||||||||</th>
                <th id='th3' style={{ paddingLeft: "7.1rem" }}>           Product</th>
                <th style={{ paddingLeft: "3.1rem" }}>Price</th>
                <th style={{ paddingLeft: "4.1rem" }}>Quantity</th>
                <th style={{ paddingLeft: "3rem" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map((item) => (
                  <tr>
                    <td>
                      <span id='removebtn' onClick={() => handledelete(item.data._id)}><ClearIcon id='icondel' /></span>
                    </td>
                    <td>
                      <img src={item.data.ProductUrl} alt="" />
                    </td> <td style={{ paddingRight: "3rem", marginRight: "2rem" }}>
                      <h3>{item.data.ProductName}</h3>
                      <p>Far far away, behind the word mountains, far from the countries</p>
                    </td> <td>
                      <h4>{item.data.ProductPrice}</h4>
                    </td> <td><div id="countProduct" >
                      <span style={{ padding: ".5rem", }} onClick={() => Decrase(item.data._id)}>-</span><span id="countspan">{item.counter}</span ><span style={{ padding: ".5rem" }} onClick={() => Increase(item.data._id)} >+</span></div>
                    </td> <td>
                      <span>${(item.data.ProductPrice * item.counter).toFixed(2)}</span>
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
              <p>${basket.reduce((total, item) => total + (item.data.ProductPrice * item.counter), 0).toFixed(2)}</p>
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
              <p style={{ color: "rgb(199,155,99)", paddingLeft: ".5rem" }}>${(basket.reduce((total, item) => total + (item.data.ProductPrice * item.counter), 0) - 3).toFixed(2)}</p>
            </div>
          </div>
          <div style={{ justifyContent: "center", textAlign: "center" }}>  <MDBBtn onClick={toggleShow} id="btn2">LAUNCH DEMO MODAL</MDBBtn></div>
          <MDBModal show={basicModal} setShow={setBasicModal} >
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Credit</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody> <div className='cardContainer'>
                  <Cards
                    cvc={cardDetails.cvc}
                    expiry={cardDetails.expiry}
                    focused={cardDetails.focus}
                    name={cardDetails.name}
                    number={cardDetails.number}
                    
                  />
                  <div>
                    <form className='cardform'>
                      <input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={cardDetails.number}
                        max={16}
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={cardDetails.name}
                        maxLength={16}

                      />
                      <div className='bottom'>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY Expiry"
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          value={cardDetails.expiry}
                        maxLength={4}

                        />
                        <input
                          type="tel"
                          name="cvc"
                          placeholder="CVC"
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          value={cardDetails.cvc}
                          maxLength={3}

                        />
                      </div>
                    </form>
                  </div>
                </div></MDBModalBody>

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
