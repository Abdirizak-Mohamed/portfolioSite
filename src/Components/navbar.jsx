import React, { Component } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Menu icon="labeled" inverted>
        <Menu.Item>
          <Image
            src={require("../images/sidebarA.png")}
            style={{ height: "50px", width: "50px" }}
            circular
          />
        </Menu.Item>
        <Link to="/" floated="right">
          <Menu.Item name="Home">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item name="About">
            <Icon name="user" />
            About
          </Menu.Item>
        </Link>
        <Link to="/projects">
          <Menu.Item name="MyWork">
            <Icon name="archive" />
            My Work
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default NavBar;
