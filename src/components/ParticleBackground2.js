import React from "react";
import Particles from "react-tsparticles";
import configParticles2 from "../config/configParticles2";
import './Home.css';

export default function ParticleBackground() {
    return(
        <Particles id="tsparticles" params = {configParticles2}></Particles>
         
    )
}
