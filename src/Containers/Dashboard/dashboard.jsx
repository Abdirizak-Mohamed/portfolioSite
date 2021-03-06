import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardRoutes from "./dashboardroutes";
import NavBar from "../../Components/navbar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Grid verticalAlign="middle">
        <Grid.Row columns={1} only="mobile tablet">
          <Grid.Column>
            <NavBar />
            <DashboardRoutes />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} only="large screen">
          <Grid.Column
            width={1}
            stretched
            style={{
              backgroundColor: "rgb(27, 28, 29)"
              //height: "99.9vh"
              //alignItems: "center",
              //borderRight: "5px solid black"
              //paddingLeft: "1.8vw"
              //minWidth: "3cm"
            }}
          >
            <Sidebar />
          </Grid.Column>
          <Grid.Column stretched width={14}>
            >
            <DashboardRoutes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
