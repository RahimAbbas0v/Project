import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Photos.css";
import ScrollAnimation from 'react-animate-on-scroll';

import Reveal from 'react-reveal/Reveal';
class RevealExample extends React.Component {
  render() {
    return (
       
         <section id="photosection">
        <div className="photos">
          <Reveal bottom><div className="photo">
            <img src="https://themewagon.github.io/coffee1/images/gallery-1.jpg" alt="" />
            <div className="searchicon">
                <span id="searchspan" ><SearchIcon id="iconn"/></span>
            </div>
          </div> </Reveal>
          <Reveal top><div className="photo" delay={2000}>
            <img src="https://themewagon.github.io/coffee1/images/gallery-2.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div></Reveal>
          <Reveal bottom><div className="photo">
            <img src="https://themewagon.github.io/coffee1/images/gallery-3.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div></Reveal>
          <Reveal right><div className="photo">
            <img src="https://themewagon.github.io/coffee1/images/gallery-4.jpg" alt="" />
            <div className="searchicon">
            <span id="searchspan"><SearchIcon id="iconn"/></span>
            </div>
          </div></Reveal>
        </div>
      </section>
       
    );
  }
}
export default RevealExample;
