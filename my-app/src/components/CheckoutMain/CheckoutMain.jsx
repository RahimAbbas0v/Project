import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CheckoutMain.css";
function CheckoutMain() {
  const [data, setData] = useState([]);
  const [beef, setBeef] = useState([]);
  const [search, setSearch] = useState([]);
  const [sort, setSort] = useState(false);
  const handlesearch = (value) => {
    const searched = data.filter((x) =>
      x.ProductName.toLowerCase().includes(value.toLowerCase())
    );
    setData(data);
  };
  useEffect(() => {
    axios.get("http://localhost:4000/datas").then((res) => setData(res.data));
  },[]);
  return (
    <section id="checkoutSection">
      <div className="headname" data-aos="fade-up" data-aos-delay={100} style={{width:"80%",textAlign:"center"}}>
        <span>Discover</span>
        <h2>BEST COFFEE SELLERS</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="container" id="checkoutcontainer">
        <div className="cards4" >
          {sort == false
            ? data
                .filter((elem) =>
                  search == ""
                    ? data
                    : elem.ProductName.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <div className="card4">
                    <img src={item.ProductUrl} alt="" />
                    <div className="card-body">
                      <h3>{item.ProductName}</h3>
                      <p>{item.ProductInfo}</p>
                      <p>
                        <span>${item.ProductPrice}</span>
                      </p>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                ))
            : data.map((item, index) => (
                <div className="card4">
                  <img src={item.ProductUrl} alt="" />
                  <div className="card-body">
                    <h3>{item.ProductName}</h3>
                    <p>{item.ProductInfo}</p>
                    <p>
                      <span>${item.ProductPrice}</span>
                    </p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
        </div>
        <div className="categorys">
           <div><div className="search">
            <SearchIcon id="nameicon" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search"
            />
          </div>
         
          <div className="productCategorys">
            <h4>Categories</h4>

            <div className="row">
              <p>Beefs</p>
              <p> ({data.filter(x=>x.Category=="Coffe").length})</p>
            </div>
            <div className="row">
              <p>Desserts</p>
              <p>({data.filter(x=>x.Category=="Dessert").length})</p>
            </div>
            <div className="row">
              <p>Drinks</p>
              <p>({data.filter(x=>x.Category=="Drink").length})</p>
            </div>
            <div className="row">
              <p>Coffes</p>
              <p>({data.filter(x=>x.Category=="Coffe").length})</p>
            </div>
            <div className="row">
              <p>FastFoods</p>
              <p>({data.filter(x=>x.Category=="FastFood").length})</p>
            </div>
          </div></div>
          <div className="blogProduct">
            <h4 id="blogh">
              Recently Blog
              <div className="blogdiv3" style={{ paddingTop: "5rem" }}>
                <div className="imgside">
                  <img
                    src="https://themewagon.github.io/coffee1/images/image_1.jpg"
                    alt=""
                  />
                </div>
                <div className="infoside2">
                  <h4>Even the all-powerful Pointing has no control about</h4>
                  <p>
                    Sept 10, 2018 Admin
                    <span>
                      {" "}
                      <SpeakerNotesIcon id="commenticon" />{" "}
                    </span>{" "}
                    3
                  </p>
                </div>
              </div>
              <div className="blogdiv3">
                <div className="imgside">
                  <img
                    src="https://themewagon.github.io/coffee1/images/image_1.jpg"
                    alt=""
                  />
                </div>
                <div className="infoside2">
                  <h4>Even the all-powerful Pointing has no control about</h4>
                  <p>
                    Sept 10, 2018 Admin
                    <span>
                      {" "}
                      <SpeakerNotesIcon id="commenticon" />{" "}
                    </span>{" "}
                    3
                  </p>
                </div>
              </div>
              <div className="blogdiv3">
                <div className="imgside">
                  <img
                    src="https://themewagon.github.io/coffee1/images/image_1.jpg"
                    alt=""
                  />
                </div>
                <div className="infoside2">
                  <h4>Even the all-powerful Pointing has no control about</h4>
                  <p>
                    Sept 10, 2018 Admin
                    <span>
                      {" "}
                      <SpeakerNotesIcon id="commenticon" />{" "}
                    </span>{" "}
                    3
                  </p>
                </div>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutMain;
