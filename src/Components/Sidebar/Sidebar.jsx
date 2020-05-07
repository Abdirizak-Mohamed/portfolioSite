import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";
import logo from "../../images/sidebarA.png";
import PageMenu from "./Menu";
import Socials from "./Socials";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <Grid centered style={{ paddingLeft: "1vw" }}>
        <Grid.Row style={{ paddingBottom: "16vh" }}>
          <Image src={logo} size="tiny" />
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: "18vh" }}>
          <PageMenu />
        </Grid.Row>
        <Grid.Row>
          <Socials />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Sidebar;
