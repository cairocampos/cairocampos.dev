
import {tsParticles} from 'tsparticles-engine'



tsParticles.load({
  id: "tsparticles",
  options: {
    background: {
        color: "#000"
    },
    fullScreen: {
        zIndex: -1
    },
    particles: {
        
        number: {
            value: 100
        },
        move: {
            enable: true
        }
    }
}
})

const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles?.play();

// pause will stop the animations
// particles.pause();