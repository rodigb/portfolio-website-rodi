import React, { useEffect } from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
import "aos/dist/aos.css"
import Aos from "aos";



const Hero = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  })


  return (
    
    <div className='hero' >
      
      
      <Home></Home>
      <div data-aos="fade-right">
      <About></About></div>
      <Portfolio ></Portfolio>
      <Footer></Footer>



       
 
        
  


    </div>
  )
}

export default Hero