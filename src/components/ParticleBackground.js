import React from "react";
import Particles from "react-tsparticles";
import configParticles from "../config/configParticles";
import './Home.css';

export default function ParticleBackground() {
    return(
        <Particles id="tsparticles" params = {configParticles}></Particles>
         
    )
}
