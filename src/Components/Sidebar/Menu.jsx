import React, { Component } from "react";
import { Menu, Icon, Reveal, Image } from "semantic-ui-react";
import about from "../../images/About.png";

class PageMenu extends Component {
  state = {};
  render() {
    return (
      <Menu icon vertical inverted>
        <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="user"
                size="big"
                color="orange"
                style={{
                  backgroundColor: "rgb(28, 28, 29)",
                  paddingLeft: "0.6vw"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={about} size="mini" />
            </Reveal.Content>
          </Reveal>
        </Menu.Item>

        <Menu.Item name="video camera" onClick={this.handleItemClick}>
          <Icon name="user" size="small" />
        </Menu.Item>

        <Menu.Item name="video play" onClick={this.handleItemClick}>
          <Icon name="video play" size="big" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default PageMenu;
