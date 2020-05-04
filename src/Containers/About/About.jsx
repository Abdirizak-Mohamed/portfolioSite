import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";
import AnimatedSquare from "../../Components/animatedSquare";
import AnimatedTitle from "../../Components/animatedTitle";
import SquareContainer from "../../Components/squareContainer";
class About extends Component {
  state = {};
  render() {
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row columns={2} verticalAlign="middle" stretched>
          <Grid.Column>
            <AnimatedTitle words="About me" titleColor="#ffa700" />
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
