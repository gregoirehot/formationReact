import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Toggle from "./Toggle";
import List from "./List";
import MyForm from "./MyForm";

const clickHere = (value) => {
  console.log("clickHere", value);
};

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" clickHere={clickHere} />
      <Toggle />
      <List />
      <MyForm />
    </div>
  );
}

export default App;
