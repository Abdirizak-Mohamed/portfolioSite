import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import logo from "../../images/lettera.svg";
import Sidebar from "../../Components/Sidebar/Sidebar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Grid.Row columns={2} centered>
          <Grid.Column
            width={2}
            style={{
              backgroundColor: "rgb(19, 19, 19)",
              height: "99.9vh",
              alignItems: "center",
              borderRight: "5px solid black",
              paddingLeft: "2vw",
              minWidth: "3cm"
            }}
            al
          >
            <Sidebar />
          </Grid.Column>
          <Grid.Column
            width={14}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "99.9vh",
              overflow: "auto",
              flexGrow: "1"
            }}
          >
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
