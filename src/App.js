import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Toggle from "./Toggle";

const clickHere = (value) => {
  console.log("clickHere", value);
};

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" clickHere={clickHere} />
      <Toggle />
    </div>
  );
}

export default App;
