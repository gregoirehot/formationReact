import React from "react";
import "./App.css";
import ApiFormGet from "./ApiFormGet";
import ApiFormPost from "./ApiFormPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetUser from "./GetUser";
import Header from "./Header";
import ToggleHook from "./ToggleHook";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ApiFormGet} />
          <Route path="/addUser" component={ApiFormPost} />
          <Route path="/getUser/:idUser" component={GetUser} />
        </Switch>
        <ToggleHook />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
