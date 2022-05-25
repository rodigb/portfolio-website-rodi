import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Box from "./ThreeComponents/Box"
import "./ThreeComponents/Box.css"
import { OrbitControls, Text, MeshWobbleMaterial, softShadows, Sphere} from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import texture from "./images/psbackground.jpg"
import background from './images/psbackground.jpg';
import htmlimage from './images/html.jpg';
 

const SpinningMesh = ({position, args, mapper, color}) => {
    
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return(
        <mesh castShadow position={position} ref={mesh}>
            <sphereBufferGeometry attatch="geometry" args={args}/>
             
            <meshStandardMaterial attatch="material" map={mapper} color={color}/>
        
        </mesh>

    )
}

function ThreeBox() {
    
    const colorMap = useLoader(TextureLoader, background);
    const colorMap2 = useLoader(TextureLoader, htmlimage);
  return (
      <div className ="box-container">
    <Canvas className="canvas" 
     
    camera={{position:[0,2,40], fov:[80]}}>
 
    <OrbitControls enableRotate={false} enableZoom={false}></OrbitControls>
    <ambientLight intensity={0.3}/>
    <directionalLight
    castShadow
    position={[0,10,0]}
    intensity={0}
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}/>

    <pointLight position={[40,80,10]} intensity={0.5}/>
    <pointLight position={[0,-10,0]} intensity={0.5}/>

    <group>
        <mesh receiveShadow rotation={[-Math.PI / 2,0 ,0 ]}position={[0,-3,0]}>
            <planeBufferGeometry attatch='geometry' args={[100,100]}/>
            <shadowMaterial attatch='material' />

        </mesh>
    </group>

    <directionalLight position={[0,4,40]} intensity={[0]}/>
     
     <SpinningMesh position={[0,1,0]} args={[12,12,12]} color={"#00A8CC"}  />
 
  </Canvas>
  </div>
  )
}

export default ThreeBox