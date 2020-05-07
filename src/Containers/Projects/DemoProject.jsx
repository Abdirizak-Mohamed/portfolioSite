import React, { Component } from "react";
import { Modal, Image, Header } from "semantic-ui-react";
import gif from "../../images/kuhabays.gif";

class DemoProject extends Component {
  state = {};
  render() {
    const { handleClose, description, name, open } = this.props;
    return (
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={gif} />
          <Modal.Description>
            <p>{description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default DemoProject;
