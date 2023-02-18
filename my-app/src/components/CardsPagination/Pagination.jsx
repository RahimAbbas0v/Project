import React, { useEffect, useState } from "react";
import './Pagination.css'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const renderData = (data) => {
  
  return (
    <section id= "Fastfoodsection2"> 
    <div className="container" id="fastfoodcontainer">
                    <div className="cards7">
                        {data.map((item,index)=>(
                        <div className="card7" >
                            <img src={item.ProductUrl} alt="" />
                            <div className="card-body">
                                <p id='datep'>Sept 10, 2018    Admin<span> <SpeakerNotesIcon id="commenticon"/> </span> 3</p>
                                <h3>Coffee Testing Day</h3>
                                <p id='aboutp'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>))}
                        
                    </div></div>
                    </section>
  );
};

function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(6);

  const [pageNumberLimit, setpageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch("http://localhost:4000/imgs")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 6);
  };

  return (
    <>
    <div id="paginationpart" style={{backgroundColor:" black"}}>

    
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
           Prev
          </button>
        </li>

        {pageDecrementBtn}
        {renderPageNumbers}
        <div >{pageIncrementBtn}</div>
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>

      </ul></div>
    </>
  );
}

export default PaginationComponent;