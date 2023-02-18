import React from 'react'
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import "./Number.css"
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import Fade from 'react-reveal/Fade';
import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
function Number() {
  return (
    <>
    <section className='numbersection'>
        <div className="container">
            <Fade bottom>
            <div className="cards2">
                <div className="card2">
                    <span id='numberspan'><EmojiFoodBeverageOutlinedIcon id="numbericons"/></span>
                    <div className="card-body">
                        <h3><CountUp start={0} end={100} duration={4} enableScrollSpy={true}/></h3>
                        <p>Coffee Branches</p>
                    </div>
                </div>
                <div className="card2">
                    <span id='numberspan'><EmojiEventsIcon id="numbericons"/></span>
                    <div className="card-body">
                        <h3><CountUp start={0} end={85} duration={4} enableScrollSpy={true}/></h3>
                        <p>Number of Awards</p>
                    </div>
                </div>
                <div className="card2">
                    <span id='numberspan'><EmojiPeopleIcon id="numbericons"/></span>
                    <div className="card-body">
                        <h3><CountUp start={0} end={10567} duration={4} enableScrollSpy={true} /></h3>
                        <p>Happy Customer</p>
                    </div>
                </div>
                <div className="card2">
                    <span id='numberspan'><SupportAgentIcon id="numbericons"/></span>
                    <div className="card-body">
                        <h3><CountUp start={0} end={900} duration={4} enableScrollSpy={true} /></h3>
                        <p>Coffee Branches</p>
                    </div>
                </div>
            </div></Fade>
        </div>

    </section>
    </>
  )
}

export default Number