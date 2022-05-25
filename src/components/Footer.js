import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 
 
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer' id='contact'>
        <div class="custom-shape-divider-bottom-1652737101">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
         
        <a className="email-link" href="mailto:rodix08@gmail.com"><p className='email'>rodix08@gmail.com</p></a>
        
    <ul className='media-ul'>
        <li className='media'><a href='https://www.linkedin.com/in/rodi-gemici-5b792a182/'><FaLinkedin/></a></li>
        <li className='media'><a href='https://github.com/rodigb?tab=repositories'><FaGithub></FaGithub></a></li>
    </ul>
    
    
    <p className='copyright-rodi'>© 2022 Rodi Gemici - Bektas</p>
    
    </div>
  )
}

export default Footer