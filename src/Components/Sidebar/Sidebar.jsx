import React, { Component } from "react";
import { Menu, Icon, Image, Grid } from "semantic-ui-react";
import logo from "../../images/lettera.svg";
import PageMenu from "./Menu";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row verticalAlign="middle">
            <Image src={logo} size="tiny" />
          </Grid.Row>
          <Grid.Row>
            <PageMenu />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Sidebar;
