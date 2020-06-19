import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Characters from "./characters";
import { Header } from "./shared/components/organisms";
import { ROUTE_CHARACTERS } from "./shared/constants";
import "./App.scss";

const App = () => {
  useEffect(() => {
    document.title = "Rick N Morty";
  });
  return (
    <Router>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route path={ROUTE_CHARACTERS} component={Characters}></Route>
          <Route render={() => <Redirect to={ROUTE_CHARACTERS} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
