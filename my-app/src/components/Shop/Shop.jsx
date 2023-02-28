import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { AddToBasket } from "../../reducers/BasketSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
function Products() {
  const [active, setActive] = useState(1)
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  const basket = useSelector(state => state.basket.value)
  const count = useSelector(state => state.basket.count)
  const dispatch = useDispatch()
  const [smShow, setSmShow] = useState(false);
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('item')))
  }, [])
  useEffect(() => {
    axios.get("http://localhost:4000/datas")
      .then(res => setData(res.data))
  }, [])
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  const AddBasket = (item) => {
    dispatch(AddToBasket(item))
  }
  const navigate=useNavigate()
  const handleView=(item)=>{
    navigate(`/details/${item._id}`)
  }
  return (
    <>
      <section id="productsection">
        <div id="headname" data-aos="fade-up" data-aos-delay="100"  data-aos-anchor="#trigger-top">

          <span>Discover</span>
          <h2>OUR PRODUCTS</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="buttons" style={{ paddingBottom: "3rem" }}>
          <button
            onClick={() => { setActive(1) }}
            id="dishbutton"
            className={active === 1 ? "activebtn" : ''}
          >
            <Link
              to="/shop"
              id="link"
              style={{
                color: active === 1 ? "black" : "",
              }}
            >
              {" "}
              Main Dish
            </Link>
          </button>
          <button
            id="drinksbutton"
            onClick={() => { setActive(2) }}
            className={active == 2 ? "activebtn" : ''}
          >
            <Link
              to="/shop"
              id="link"
              style={{
                color: active == 2 ? "black" : "",
              }}
            >
              {" "}
              Drinks
            </Link>
          </button>
          <button
            id="dessertbutton"
            onClick={() => { setActive(3) }}
            className={active == 3 ? "activebtn" : ''}
          >
            <Link
              to="/shop"
              id="link"
              style={{
                color: active == 3 ? "black" : "",
              }}
            >
              {" "}
              Desserts
            </Link>
            
          </button>
          <button
            id="dessertbutton"
            onClick={() => { setActive(4) }}
            className={active == 4 ? "activebtn" : ''}
          >
            <Link
              to="/shop"
              id="link"
              style={{
                color: active == 4 ? "black" : "",
              }}
            >
              {" "}
              Coffes
            </Link>
            
          </button>
        </div>
        <div className="container" id="cakecontainer">
          <div className="cards8">
            {active == 1 ? (data.filter(x => x.Category == "Beef").slice(0, 6).map((item, index) => (
              <div className="card8" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={item.ProductUrl}
                  alt=""
                />
                <div className="card-body">
                  <h3>{item.ProductName}</h3>
                  <p>{item.ProductInfo}</p>
                  <p>
                    <span>${item.ProductPrice}</span>
                  </p>
                  <button onClick={()=>handleView(item)}>Details</button>
                  <button onClick={() => { user ? AddBasket(item) : setSmShow(true) }}>Add to Cart</button>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm" style={{ textAlign: "center", color: "#351908" }}>
                        Coffe Blend
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You need an account for shopping</Modal.Body>
                  </Modal>
                </div>
              </div>))) : null}
            {active == 3 ? (data.filter(x => x.Category == "Dessert").slice(0, 6).map((item, index) => (
              <div className="card8" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={item.ProductUrl}
                  alt=""
                />
                <div className="card-body">
                  <h3>{item.ProductName}</h3>
                  <p>{item.ProductInfo}</p>
                  <p>
                    <span>${item.ProductPrice}</span>
                  </p>
                  <button onClick={()=>handleView(item)}>Details</button>
                  <button onClick={() => { user ? AddBasket(item) : setSmShow(true) }}>Add to Cart</button>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm" style={{ textAlign: "center", color: "#351908" }}>
                        Coffe Blend
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You need an account for shopping</Modal.Body>
                  </Modal>
                </div>
              </div>))) : null}
            {active == 2 ? (data.filter(x => x.Category == "Drink").slice(0, 6).map((item, index) => (
              <div className="card8" key={index} data-aos="fade-up" data-aos-delay={index * 100} >
                <img
                  src={item.ProductUrl}
                  alt=""
                />
                <div className="card-body">
                  <h3>{item.ProductName}</h3>
                  <p>{item.ProductInfo}</p>
                  <p>
                    <span>${item.ProductPrice}</span>
                  </p>
                  <button onClick={()=>handleView(item)}>Details</button>
                  <button onClick={() => { user ? AddBasket(item) : setSmShow(true) }}>Add to Cart</button>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm" style={{ textAlign: "center", color: "#351908" }}>
                        Coffe Blend
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You need an account for shopping</Modal.Body>
                  </Modal>
                </div>
              </div>))) : null}
              {active==4 ? (data.filter(x=>x.Category=="Coffe").map((item,index)=>(
          <div className="card8" key={index} data-aos="fade-up" data-aos-delay={index*100}>
            <img
              src={item.ProductUrl}
              alt=""
            />
            <div className="card-body">
              <h3>{item.ProductName}</h3>
              <p>{item.ProductInfo}</p>
              <p>
                <span>${item.ProductPrice}</span>
              </p>
              <button onClick={()=>handleView(item)}>Details</button>
              <button onClick={() => {user ?  AddBasket(item) : setSmShow(true) }}>Add to Cart</button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" style={{textAlign:"center",color:"#351908"}}>
            Coffe Blend
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>You need an account for shopping</Modal.Body>
      </Modal>
            </div>
          </div> ))):null}</div></div>
      </section>
    </>
  );
}

export default Products;
