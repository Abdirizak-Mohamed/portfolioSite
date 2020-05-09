import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";
import logo from "../../images/lettera.svg";
import AnimatedTitle from "../../Components/animatedTitle";
class Home extends Component {
  state = {};
  render() {
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row
          columns={1}
          only="mobile"
          centered
          style={{ height: "100vh" }}
        >
          <Grid.Column style={{ paddingTop: "25vh" }}>
            <AnimatedTitle
              words="Hi,                        "
              titleColor="#fff"
              textSize={53}
            />
            <AnimatedTitle
              words="I'm Abdirizak,    "
              titleColor="#fff"
              textSize={53}
            />
            <AnimatedTitle
              words="Web Developer."
              titleColor="#fff"
              textSize={53}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} verticalAlign="middle" only="large screen">
          <Grid.Column>
            <AnimatedTitle
              words="Hi,                        "
              titleColor="#fff"
            />
            <AnimatedTitle words="I'm Abdirizak,    " titleColor="#fff" />
            <AnimatedTitle words="Web Developer." titleColor="#fff" />
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
