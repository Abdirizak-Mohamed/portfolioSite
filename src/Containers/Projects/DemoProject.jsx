import React, { Component } from "react";
import { Modal, Image, Button } from "semantic-ui-react";

class DemoProject extends Component {
  state = {};
  render() {
    const {
      handleClose,
      description,
      name,
      open,
      color,
      demoSize,
      showButton,
      sourceCodeLink
    } = this.props;
    let sourceCode;
    if (showButton) {
      sourceCode = (
        <Button
          fluid
          hidden={showButton}
          as="a"
          href={`${sourceCodeLink}`}
          style={{
            fontFamily: "Montserrat, Work Sans, sans-serif",
            fontWeight: "bold",
            letterSpacing: "-0.04em",
            fontSize: 25,
            backgroundColor: `${color}`,
            display: "flex", // Set the display value to flex
            justifyContent: "center" // Center all children elements on the x axis
          }}
        >
          Source Code
        </Button>
      );
    }
    return (
      <Modal open={open} onClose={handleClose}>
        <Modal.Header style={{ backgroundColor: `${color}` }}>
          {name}
        </Modal.Header>
        <Modal.Content image>
          <Image
            size={`${demoSize}`}
            src={require(`../../images/${name}.gif`)}
          />
          <Modal.Description>
            <p
              style={{
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: 25,
                color: `${color}`,
                display: "flex", // Set the display value to flex
                justifyContent: "center" // Center all children elements on the x axis
              }}
            >
              {description}
            </p>

            {sourceCode}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default DemoProject;
