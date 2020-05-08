import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

class Socials extends Component {
  state = {};
  render() {
    return (
      <Menu icon vertical inverted>
        <Menu.Item>
          <Button
            circular
            inverted
            icon="github"
            size="mini"
            as="a"
            href="https://github.com/Abdirizak-Mohamed"
          />
        </Menu.Item>
        <Menu.Item>
          <Button
            circular
            color="linkedin"
            icon="linkedin"
            size="mini"
            as="a"
            href="https://www.linkedin.com/in/abdirizak-mohamed-63778117b/"
          />
        </Menu.Item>

        <Menu.Item>
          <Button
            circular
            color="twitter"
            icon="twitter"
            size="mini"
            as="a"
            href="https://twitter.com/RazrRiz"
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Socials;
