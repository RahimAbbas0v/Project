import React from "react";
import "./AboutHeader.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
export default function CarouselComponent() {
    return (
        <header>
        <div class="carousel-wrapper">
            <Carousel infiniteLoop={true} showThumbs={false} showIndicators   autoPlay showStatus={false}>
                <div>
                    <img src="https://themewagon.github.io/coffee1/images/bg_3.jpg" />
                    
                    <div className="paragraf"><Reveal bottom>
                        <h4>About Us</h4>
                        <div className="pages">
                        <p id="homeparagraf">Home</p>
                        <p id="aboutparagraf">About</p></div></Reveal>
                    </div>
                    
                </div>
                <div>
                    <img src="https://themewagon.github.io/coffee1/images/bg_3.jpg" />
                    
                    <div className="paragraf">
                        <h4>About Us</h4>
                        <div className="pages">
                        <p id="homeparagraf">Home</p>
                        <p id="aboutparagraf">About</p></div>
                    </div>
                    
                </div>
                <div>
                    <img src="https://themewagon.github.io/coffee1/images/bg_3.jpg" />
                    
                    <div className="paragraf">
                        <h4>About Us</h4>
                        <div className="pages">
                        <p id="homeparagraf">Home</p>
                        <p id="aboutparagraf">About</p></div>
                    </div>
                    
                </div>
                
            </Carousel>
        </div></header>
    );
}