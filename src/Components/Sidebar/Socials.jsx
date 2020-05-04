import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

class Socials extends Component {
  state = {};
  render() {
    return (
      <Menu icon vertical inverted>
        <Menu.Item>
          <Button circular inverted icon="github" size="mini" />
        </Menu.Item>
        <Menu.Item>
          <Button circular color="linkedin" icon="linkedin" size="mini" />
        </Menu.Item>

        <Menu.Item>
          <Button circular color="twitter" icon="twitter" size="mini" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Socials;
