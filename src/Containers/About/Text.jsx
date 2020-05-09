import React, { Component } from "react";

class AboutText extends Component {
  state = {};
  render() {
    return (
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
        I am a passionate and dedicated web developer who has developed products
        for enterprise clients. I specialize in building applications specific
        to the business needs of my clients. I have done work in software
        development, mobile app creation, front-end/back-end web,
        database/server management,
      </p>
    );
  }
}

export default AboutText;
