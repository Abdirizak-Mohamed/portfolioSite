import React, { Component } from "react";
import { Grid, Card, List, Image, Reveal, Button } from "semantic-ui-react";
import html from "../../images/KuhabaysoLogo.png";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({ showModal: true });
  }

  render() {
    const {
      imageName,
      name,
      type,
      technologies,
      backgroundColor,
      description
    } = this.props.project;

    return (
      <Grid.Column centered>
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
