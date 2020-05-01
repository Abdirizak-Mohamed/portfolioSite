import React, { Component } from "react";
import { Menu, Icon, Reveal, Image } from "semantic-ui-react";
import about from "../../images/About.png";
import home from "../../images/Home.png";
import skills from "../../images/Skills.png";
import portfolio from "../../images/Portfolio.png";

class PageMenu extends Component {
  state = {};
  render() {
    return (
      <Menu icon vertical inverted>
        <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="home"
                size="big"
                color="orange"
                style={{
                  backgroundColor: "rgb(28, 28, 29)"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={home} size="mini" />
            </Reveal.Content>
          </Reveal>
        </Menu.Item>

        <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="user"
                size="big"
                color="orange"
                style={{
                  backgroundColor: "rgb(28, 28, 29)"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={about} size="mini" />
            </Reveal.Content>
          </Reveal>
        </Menu.Item>

        <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="cog"
                size="big"
                color="orange"
                style={{
                  backgroundColor: "rgb(28, 28, 29)"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={skills} size="mini" />
            </Reveal.Content>
          </Reveal>
        </Menu.Item>

        <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="archive"
                size="big"
                color="orange"
                style={{
                  backgroundColor: "rgb(28, 28, 29)"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={portfolio} size="mini" />
            </Reveal.Content>
          </Reveal>
        </Menu.Item>
      </Menu>
    );
  }
}

export default PageMenu;
