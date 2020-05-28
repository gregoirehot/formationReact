import React, { useReducer } from "react";
import "./App.css";
import ApiFormGet from "./ApiFormGet";
import ApiFormPost from "./ApiFormPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetUser from "./GetUser";
import Header from "./Header";
import Todo from "./Todo";
import { AppContext, initialState, reducer } from "./store";
import TodoBis from "./TodoBis";
import FormHook from "./FormHook";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ApiFormGet} />
            <Route path="/addUser" component={ApiFormPost} />
            <Route path="/getUser/:idUser" component={GetUser} />
          </Switch>
          <Todo />
          <TodoBis />
          <FormHook />
          {/* <Footer /> */}
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
