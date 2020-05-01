import React from "react";
import "./App.css";
import Dashboard from "./Containers/Dashboard/dashboard";
import BackgroundParticles from "./Background";

function App() {
  return (
    <div className="App">
      <BackgroundParticles />
      <Dashboard />
    </div>
  );
}

export default App;
