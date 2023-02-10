import { color } from '@mui/system';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Header.css"
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';
const fadeImages = [
  {
    url: 'https://themewagon.github.io/coffee1/images/bg_1.jpg',
    span:"Welcome",
    h2:"The Best Coffee Testing Experience",
    p:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
  {
    url: 'https://themewagon.github.io/coffee1/images/bg_2.jpg',
    span:"Welcome",
    h2:"Amazing Taste & Beautiful Place",
    p:"A small river named Duden flows by their place and supplies it with the necessary regelialia."



  },
  {
    url: 'https://themewagon.github.io/coffee1/images/bg_3.jpg',
    span:"Welcome",
    h2:"Creamy Hot and Ready to Serve",
    p:"A small river named Duden flows by their place and supplies it with the necessary regelialia."



  },
];

class RevealExample extends React.Component {
  render() {
    return (
      <>
       <header id='header'>
    <div className="slide-container" style={{backgroundColor:"black"}}>
      <Fade duration={3000} pauseOnHover={false} arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%',height:"100vh",objectFit:"cover" }} src={fadeImage.url} />
            <div className='center'>
              <Reveal effect="fadeInUp"><span>{fadeImage.span}</span>
              <h2>{fadeImage.h2}</h2>
              <p>{fadeImage.p}</p>
              <div className="btndiv">
                <button id='orderbtn'>Order Now</button>
                <button id='viewbtn'>View Menu</button>

              </div></Reveal>
              </div>
          </div>
        ))}
      </Fade>
    </div></header>
      
      
      </>
    );
  }
}
export default RevealExample