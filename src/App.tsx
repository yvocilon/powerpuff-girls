import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Shows from "./components/shows/Shows";
import Show from "./components/show/Show";
import Episode from "./components/episode/Episode";
import { Provider } from "react-redux";
import { store } from "./store";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const App = () => (
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <Switch>
        <Route path="/shows/:id/:name/:episodeId/:episodeName">
          <Episode />
        </Route>
        <Route path="/shows/:id/:name">
          <Show />
        </Route>
        <Route path="/shows">
          <Shows />
        </Route>
        <Redirect exact from="/" to="/shows" />
      </Switch>
    </Provider>
  </Router>
);

export default App;
