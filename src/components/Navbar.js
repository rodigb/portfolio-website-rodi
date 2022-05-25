import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

import {Link} from 'react-scroll'

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className = 'logo'>
            
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color:'white'}}/>) : (<FaBars size={30} style={{color:'white'}}></FaBars>)}
                

            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to='home' smooth={true} duration={500} ><li className='nav-item'>
                    <div className="triangle-text"><span className="nav-num">01. </span>Home </div>
                </li></Link>

                <Link to='about' smooth={true} duration={500}><li className='nav-item'>
                    <div className="circle-text"><span className="nav-num">02. </span>About  </div>
                </li></Link>
                <Link to='work' smooth={true} duration={500}><li className='nav-item'>
                    <div className="cross-text"><span className="nav-num">03. </span>Portfolio  </div>
                </li></Link>
                {/* <li className='nav-item'>
                    <Link to='projects' smooth={true} duration={500}>Projects</Link>
                </li> */}
                <Link to='contact' smooth={true} duration={500}><li className='nav-item'>
                    <div className="square-text"><span className="nav-num">04. </span>Contact  </div>
                </li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar