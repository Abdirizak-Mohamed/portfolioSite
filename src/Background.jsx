import React, { Component } from "react";
import Particles from "react-particles-js";

class BackgroundParticles extends Component {
  state = {};
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    );
  }
}

export default BackgroundParticles;
