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
        <Grid.Row
          only="mobile tablet"
          style={{
            paddingBottom: "4vh",
            paddingLeft: "1vw",
            paddingTop: "10vh"
          }}
        >
          <AnimatedTitle words=" Portfolio" titleColor="#ffa700" />
        </Grid.Row>

        {projectInfo.map(project => {
          return (
            <Grid.Row centered only="mobile tablet" columns={1}>
              <ProjectCard project={project} key={project.name} />
            </Grid.Row>
          );
        })}

        <Grid.Row centered only="large screen">
          <AnimatedTitle words=" Portfolio" titleColor="#ffa700" />
        </Grid.Row>

        <Grid.Row columns={4} only="large screen">
          {projectInfo.map(project => {
            return <ProjectCard project={project} />;
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Projects;
