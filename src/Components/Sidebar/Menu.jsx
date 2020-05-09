import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Reveal, Image } from "semantic-ui-react";
import about from "../../images/About.png";
import home from "../../images/Home.png";
//import skills from "../../images/Skills.png";
import portfolio from "../../images/Portfolio.png";

class PageMenu extends Component {
  state = {};
  render() {
    return (
      <Menu icon vertical inverted>
        <Link to="/">
          <Menu.Item>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Icon
                  name="home"
                  size="big"
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
        </Link>
        <Link to="/about">
          <Menu.Item>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Icon
                  name="user"
                  size="big"
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
        </Link>
        {/* <Menu.Item>
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Icon
                name="cog"
                size="big"
                style={{
                  backgroundColor: "rgb(28, 28, 29)"
                }}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={skills} size="mini" />
            </Reveal.Content>
          </Reveal>
              </Menu.Item>*/}
        <Link to="/projects">
          <Menu.Item>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Icon
                  name="archive"
                  size="big"
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
        </Link>
      </Menu>
    );
  }
}

export default PageMenu;
