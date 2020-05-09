import React, { Component } from "react";

class AboutText extends Component {
  state = {};
  render() {
    return (
      <div>
        <p
          style={{
            fontFamily: "Montserrat, Work Sans, sans-serif",
            fontWeight: "bold",
            letterSpacing: "-0.04em",
            fontSize: 25,
            color: "white",
            display: "flex", // Set the display value to flex
            justifyContent: "left", // Center all children elements on the x axis
            textAlign: "left",
            paddingLeft: "5vw"
          }}
        >
          I am a freelance web developer who has developed products specific to
          the business needs of my clients. I have a demonstrated history of
          working in the Investment banking/venture industry. I have great
          analytical, communication and presentation Skills.
        </p>
        <p
          style={{
            fontFamily: "Montserrat, Work Sans, sans-serif",
            fontWeight: "bold",
            letterSpacing: "-0.04em",
            fontSize: 25,
            color: "white",
            display: "flex", // Set the display value to flex
            justifyContent: "left", // Center all children elements on the x axis
            textAlign: "left",
            paddingLeft: "5vw"
          }}
        >
          I am a strong engineering professional currently in pursuit of a
          Computer Science MSc from the University of York. I have built web,
          desktop and mobile applications and I have spent time developing my
          front-end/back-end web, database/server management skills.
        </p>
      </div>
    );
  }
}

export default AboutText;
