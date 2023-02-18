import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import { duration } from "@mui/material"; 
import './Comment.css'
function Comment() {
  return (
    <>
    <section id='commentsection'>
    <div id="CommetHead" data-aos="fade-up" data-aos-delay="50">
            <span>Testimony</span>
            <h2>CUSTOMERS SAYS</h2>
            <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
            </p>
    </div>
    
     
        <div className="cards5">
            <div className="card1" data-aos="fade-right" >
                <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                <div className="card-body">
                    <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                    <div className="right-card">
                        <h4>Louise Kelly</h4>
                        <h5>Illustrator Designer</h5>

                    </div>
                </div>
            </div>
            <div className="card2">
                <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                <div className="card-body">
                    <img src="https://themewagon.github.io/coffee1/images/person_2.jpg" alt="" />
                    <div className="right-card">
                        <h4>Louise Kelly</h4>
                        <h5>Illustrator Designer</h5>

                    </div>
                </div>
            </div>
            <div className="card1" data-aos="fade-up" >
                <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                <div className="card-body">
                    <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                    <div className="right-card">
                        <h4>Louise Kelly</h4>
                        <h5>Illustrator Designer</h5>

                    </div>
                </div>
            </div>
            <div className="card2">
                <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                <div className="card-body">
                    <img src="https://themewagon.github.io/coffee1/images/person_2.jpg" alt="" />
                    <div className="right-card">
                        <h4>Louise Kelly</h4>
                        <h5>Illustrator Designer</h5>

                    </div>
                </div>
            </div>
            <div className="card1" data-aos="fade-up" >
                <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                <div className="card-body">
                    <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                    <div className="right-card">
                        <h4>Louise Kelly</h4>
                        <h5>Illustrator Designer</h5>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Comment

