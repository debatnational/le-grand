import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HelloKitty } from "./HelloKitty";
import { ByeKitty } from "./ByeKitty";
import { KittyFirstDebate } from "./KittyFirstDebate";

import "App.scss";

ReactDOM.render(
  <Router>
    <div>
      <div className="header" />
      <div className="title">
        <h2>Le grand</h2>
        <h1>débat national</h1>
      </div>
      <div className="main-content">
        <Route exact component={ByeKitty} path="/bye-kitty" />
        <Route
          exact
          component={KittyFirstDebate}
          path="/kitty-s-first-debate"
        />
        <Route exact component={HelloKitty} path="/" />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
