import React from 'react'
import './PortfolioCard.css'
import  { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function PortfolioCard(props) {

  return (
    <div className="card">
        <div className="card-body">
        
            <div className="image-div"><img src={props.img}/>
                <a className="img-overlay">
                
                </a>
            
           
            </div>

            <h2 className ="card-title">{props.title}</h2>
            <p className="card-desc">{props.desc}</p>

        </div>
        <button className="card-button1" ><a href={props.link} ><FaGithub></FaGithub></a></button>
         
    </div>
  )
}

export default PortfolioCard