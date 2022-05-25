import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Home.css';
import './Hero2.css';
import {useInView} from 'react-intersection-observer';
import background from './images/background.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import Pdf from './files/RodiCV.pdf'
 
import ParticleBackground from './ParticleBackground';
 
import ThreeBox from "./ThreeBox"
import Typewriter from "typewriter-effect"
import { FaLinkedin, FaGithub } from 'react-icons/fa';




const Home = () => {

  const [state] = useState({
    title:"Hello,",
    title2: "My Name Is",
    title3: "Rodi Gemici-Bektas",


  })


  return (
    
    <div className='hero' id="home">
        
      
 

      <div className='home-page' >
        <div className='home-section' >
          

  
        
        <div className='section1' >
        {/* <h1 className="home-header">Home<span class="blinking-space">_</span></h1> */}
          
          {/* <ReactCube></ReactCube> */}
          <div className="home-intro-container">
          <div className="home-intro">
            <h2>
              <div className="title">{state.title}</div>
              <div className="title2">{state.title2}</div>
              <div className="title3">{state.title3}</div>
            </h2>
            <div className="text">
              <Typewriter
              options={{
                strings: ["I'm a Computer Science Graduate!",
                 "I'm a Full Stack Developer!",
                 "I have a keen interest in UX/UI Design!",
                 ],
                autoStart: true,
                loop: true,
                delay:40,
              }}>

              </Typewriter>
            </div>
            
            <a className ="cv-anchor" href = {Pdf} target= "_blank" > <button className="cv-btn">My CV / Resume</button></a>
            
          </div>
          </div>
          <div className="social-btns">
            <ul className="social-ul">
            <a href='https://github.com/rodigb?tab=repositories'><li className="social1"><FaGithub/></li></a>
              <a href='https://www.linkedin.com/in/rodi-gemici-5b792a182/'><li className="social2"><FaLinkedin/></li></a>
            </ul>
          </div>
          {/* <div className="sphere-box">
          <ThreeBox></ThreeBox>
          </div> */}
          </div>

        
         


         

        {/* <h1 className='greeting'>Hello, I'm <span class="name-style">Rodi Gemici - Bektas</span>.</h1> */}
        {/* <h1 className='greeting'></h1>
        <h1 className='greeting1'>Hello, I'm <span class="name-style">Rodi Gemici - Bektas</span>.</h1>
        <h2 className='greeting2'>I'm A Full-Stack Developer!</h2> */}
        
        {/* <button className='projects-button'>MY CV / RESUME</button>
        
        <ul className='media-ul'>
          <li> <a href = 'https://www.linkedin.com/in/rodi-gemici-5b792a182/?originalSubdomain=uk'className='media-item'>LinkedIn <FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li> <a href = 'https://github.com/rodigb?tab=repositories' className='media-item'>Github <FontAwesomeIcon icon={faGithub} /></a></li>
          <li> <a href = 'https://www.w3schools.co.uk/' className='media-item'>Email <FontAwesomeIcon icon={faSquareEnvelope} /></a></li>
          <li> <a href = 'https://www.w3schools.co.uk/' className='media-item'>London, UK <FontAwesomeIcon icon={faLocationArrow} /></a></li>
        </ul> */}
 
      
        
           
        
        
       
        </div>
        </div>
        

 
        {/* <h1 className="portfolio-header">My Portfolio <span class="blinking-space">_</span></h1> */}
  


    </div>
  )
}

export default Home