import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";
import logo from "../../images/lettera.svg";
import AnimatedTitle from "../../Components/animatedTitle";
class Home extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Grid.Row columns={2} verticalAlign="middle" stretched>
          <Grid.Column>
            <AnimatedTitle />
          </Grid.Column>
          <Grid.Column>
            <Image src={logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
