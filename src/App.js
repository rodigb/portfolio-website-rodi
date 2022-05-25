import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import About from './components/About'
import BeatLoader from "react-spinners/BeatLoader";
import ParticleBackground from './components/ParticleBackground';



 



function App() {
  const[loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },2000)

  },[])
  
  return (

    
    
    <div className="loader" >
      
      <ParticleBackground></ParticleBackground>
        <div className="app-background">
          
          <div className="app-components">
            
        <Navbar></Navbar>
        <Hero></Hero>
        
        
          </div>
        </div>
    
      

     
    </div>
    
  );
}

export default App;
