import React, { Component } from "react";
import { Grid, Card, List, Image, Button } from "semantic-ui-react";
import html from "../../images/KuhabaysoLogo.png";
import DemoProject from "./DemoProject";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      description: "",
      gif: ""
    };
  }

  handleClick() {
    this.setState({ showModal: true });
  }
  handleClose() {
    console.log("hi");
    this.setState({ showModal: false });
  }

  render() {
    const {
      imageName,
      name,
      type,
      technologies,
      backgroundColor,
      description,
      showButton,
      size,
      sourceCode
    } = this.props.project;
    const { showModal } = this.state;

    return (
      <Grid.Column centered>
        <DemoProject
          open={showModal}
          handleClose={() => this.handleClose()}
          description={description}
          name={name}
          color={backgroundColor}
          showButton={showButton}
          demoSize={size}
          sourceCodeLink={sourceCode}
        />
        <Card>
          <Image src={require(`../../images/${imageName}`)} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <List divided relaxed centered>
              <List.Item>
                <List.Content>
                  <List.Header>{type}</List.Header>
                </List.Content>
              </List.Item>
              {technologies.map(tech => {
                return (
                  <List.Item>
                    <List.Content>{tech}</List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Card.Content>
          <Button
            style={{ backgroundColor: `${backgroundColor}` }}
            onClick={() => this.handleClick()}
          >
            View Demo
          </Button>
        </Card>
      </Grid.Column>
    );
  }
}

export default ProjectCard;
