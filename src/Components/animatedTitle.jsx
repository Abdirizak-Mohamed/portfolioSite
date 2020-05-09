import React, { Component } from "react";
import { motion } from "framer-motion";
import { Grid } from "semantic-ui-react";

class AnimatedTitle extends Component {
  state = {};

  render() {
    const string = Array.from(this.props.words);
    const { titleColor, textSize } = this.props;
    let size;
    if (textSize) {
      size = textSize;
    } else {
      size = 60;
    }
    // Add staggering effect to the children of the container
    const containerVariants = {
      before: {},
      after: { transition: { staggerChildren: 0.06 } }
    };

    // Variants for animating each letter
    const letterVariants = {
      before: {
        opacity: 0,
        y: 40,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200
        }
      },
      after: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200
        }
      }
    };

    return (
      <Grid>
        <Grid.Row centered style={{ textAlign: "left" }}>
          <motion.div
            center={"y"}
            height={26}
            width={"100%"}
            background={""}
            style={{
              fontFamily: "Montserrat, Work Sans, sans-serif",
              fontWeight: "bold",
              letterSpacing: "-0.04em",
              fontSize: size,
              color: titleColor,
              display: "flex", // Set the display value to flex
              justifyContent: "center" // Center all children elements on the x axis
            }}
            variants={containerVariants}
            initial={"before"}
            animate={"after"}
          >
            {string.map((letter, index) => (
              <motion.div
                key={index}
                width={"auto"} // Set the width to the width of the letter
                height={26} // Set the height to the height of the text
                background={""}
                style={{ position: "relative" }} // Position elements
                whileHover={{ scale: 1.2, color: "#ffa700" }}
                variants={letterVariants}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.div>
            ))}
          </motion.div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AnimatedTitle;
