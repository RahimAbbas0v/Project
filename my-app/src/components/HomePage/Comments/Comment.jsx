import React from 'react'
import './Comment.css'
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
class RevealExample extends React.Component {
    render() {
        return (
            <><section id='commentsection'>
            <div id="CommetHead">
                <Reveal bottom>
                    <span>Testimony</span>
                    <h2>CUSTOMERS SAYS</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </Reveal>
            </div>
            
             
                <div className="cards5">
                <Reveal bottom>
                    <div className="card1">
                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                        <div className="card-body">
                            <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                            <div className="right-card">
                                <h4>Louise Kelly</h4>
                                <h5>Illustrator Designer</h5>

                            </div>
                        </div>
                    </div></Reveal>
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
                    <Reveal top>
                    <div className="card1">
                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                        <div className="card-body">
                            <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                            <div className="right-card">
                                <h4>Louise Kelly</h4>
                                <h5>Illustrator Designer</h5>

                            </div>
                        </div>
                    </div></Reveal>
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
                    <Reveal bottom>
                    <div className="card1">
                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                        <div className="card-body">
                            <img src="https://themewagon.github.io/coffee1/images/person_3.jpg" alt="" />
                            <div className="right-card">
                                <h4>Louise Kelly</h4>
                                <h5>Illustrator Designer</h5>

                            </div>
                        </div>
                    </div></Reveal>
                </div>
            </section>
            
            </>
        );
    }
}
export default RevealExample