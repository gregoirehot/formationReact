import React from "react";
import "./App.css";
import Welcome from "./Welcome";

const clickHere = (value) => {
  console.log("clickHere", value);
};

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" clickHere={clickHere} />
    </div>
  );
}

export default App;
