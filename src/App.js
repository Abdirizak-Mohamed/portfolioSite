import React from "react";
import "./App.css";
import Dashboard from "./Containers/Dashboard/dashboard";
import BackgroundParticles from "./Background";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <BackgroundParticles />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
