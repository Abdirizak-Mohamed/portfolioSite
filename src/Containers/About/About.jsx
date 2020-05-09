import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import AnimatedTitle from "../../Components/animatedTitle";
import SquareContainer from "../../Components/squareContainer";
import AboutText from "./Text";
class About extends Component {
  state = {};
  render() {
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row
          columns={1}
          only="mobile"
          centered
          style={{ paddingTop: "10vh" }}
        >
          <Grid.Column>
            <AnimatedTitle words="About me" titleColor="#ffa700" />
            <br />
            <br />
            <AboutText />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          columns={2}
          verticalAlign="middle"
          stretched
          only="large screen"
        >
          <Grid.Column>
            <AnimatedTitle words="About me" titleColor="#ffa700" />
            <br />
            <br />
            <AboutText />
          </Grid.Column>
          <Grid.Column stretched>
            <SquareContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
