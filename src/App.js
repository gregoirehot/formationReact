import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Toggle from "./Toggle";
import List from "./List";
import MyForm from "./MyForm";
import ApiFormGet from "./ApiFormGet";

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
      <ApiFormGet />
    </div>
  );
}

export default App;
