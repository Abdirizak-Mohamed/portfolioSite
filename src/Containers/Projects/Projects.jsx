import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import AnimatedTitle from "../../Components/animatedTitle";
import ProjectCard from "./ProjectCard";
import projectInfo from "./Cards";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Grid stackable style={{ paddingLeft: "10vw", paddingTop: "2vw" }}>
        <Grid.Row centered>
          <AnimatedTitle words=" Portfolio" titleColor="#ffa700" />
        </Grid.Row>
        <Grid.Row columns={4}>
          {projectInfo.map(project => {
            return <ProjectCard project={project} />;
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Projects;
