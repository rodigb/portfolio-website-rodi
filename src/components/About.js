import React from 'react'
import './About.css'
import './Home.css'
import Avatar from './Avatar'
 
import { withIsVisible } from 'react-is-visible'
import  { FaHtml5,  FaJs, FaCss3, FaReact, FaCloud, FaDatabase, FaPython, FaGitAlt } from 'react-icons/fa'


function About() {



  return (
    <div className = 'about-page' id="about"> 
    <div className = "about-background"></div>

     
     
    <div className = "about-description">
    <div className="about-avatar-area">
    <div className="about-avatar">
    <Avatar></Avatar>
    
    </div>
    </div>
    
    
    <div className="about-box">
    <h1 className="about-header"><span className="header-num">02. </span>About Me</h1>
      <div className="about-textarea">
      
      <p className="about-text1">Hi, my name is Rodi. I am a full stack web developer based in London. 
      I'm currently looking for a new role as a software developer or web developer.
      </p>
      <p className="about-text1">
      In the past I have worked as a full stack web developer at a start up specialising in building bespoke data platforms for clients.
      </p>

      <p className="about-text1">
      When I am not coding, you can probably find me lifting weights, playing football, or exploring London. 

      </p>

      <p className="tech-text">Here are some technologies I've worked with recently</p>

      <div className="skills-grid">
      <div className="skill-icon"><h1><FaHtml5></FaHtml5></h1>
      <span className="tooltip">HTML</span>
      </div>
      <div className="skill-icon"><h1><FaJs></FaJs></h1>
      <span className="tooltip">JavaScript</span></div>

      <div className="skill-icon"><h1><FaCss3></FaCss3></h1>
      <span className="tooltip">CSS</span></div>
      <div className="skill-icon"><h1><FaReact></FaReact></h1>
      <span className="tooltip">ReactJS</span></div>
      <div className="skill-icon"><h1><FaCloud></FaCloud></h1>
      <span className="tooltip">GCP</span></div>
      <div className="skill-icon"><h1><FaDatabase></FaDatabase></h1>
      <span className="tooltip">SQL</span></div>
      <div className="skill-icon"><h1><FaPython></FaPython></h1>
      <span className="tooltip">Python</span></div>
      <div className="skill-icon"><h1><FaGitAlt></FaGitAlt></h1>
      <span className="tooltip">Git</span></div>




      

      </div> 





      </div>


    </div>


      <div className = "about-images">
      



    </div>

 
    </div>
 
    </div>
    
  )
}

export default About