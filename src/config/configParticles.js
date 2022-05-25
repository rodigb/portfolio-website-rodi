// src/config/particlesConfig.js "#9b037d", "#ff0000", "#2f00ff","#15ff00"

const particlesConfig = 
{
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["00A8CC"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    // line_linked: {
    //   enable: true,
    //   distance: 150,
    //   color: "#ffffff",
    //   opacity: 0.4,
    //   width: 1
    // },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["bubble","repulse"],
 
        
      },
      
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        }
      },
      bubble: {
        distance: 400,
        size: 6,
        duration: 2,
        opacity: 8,
        speed: 3,
        
       
        
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
    
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
  
  export default particlesConfig;