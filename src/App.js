import React from "react";
import "./App.css";
import Welcome from "./Welcome";

const clickHere = (value) => {
  console.log("clickHere", value);
};

const clickHere2 = (value) => {
  console.log("clickHere2", value);
};

const clickHere3 = (value) => {
  console.log("clickHere3", value);
};

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" clickHere={clickHere} />
      <Welcome name="Greg2" clickHere={clickHere2} />
      <Welcome name="Greg3" clickHere={clickHere3} />
    </div>
  );
}

export default App;
