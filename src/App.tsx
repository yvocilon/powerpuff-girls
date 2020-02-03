import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Shows from "./components/shows/Shows";
import Show from "./components/show/Show";
import Episode from "./components/episode/Episode";

const App = () => (
  <Router>
    <Switch>
      <Route path="/shows/:show/:episode">
        <Episode />
      </Route>
      <Route path="/shows/:show">
        <Show />
      </Route>
      <Route path="/shows">
        <Shows />
      </Route>
      <Redirect exact from="/" to="/shows" />
    </Switch>
  </Router>
);

export default App;
