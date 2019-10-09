import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import Map from "./containers/map/map";
import { Tiny } from "./containers/tiny";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { experimentApp } from "./reducers";
import { createStore } from "redux";

const store = createStore(experimentApp);

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/home" component={App} />
        <Route exact path="/" component={Map} />
        <Route exact path="/tiny" component={Tiny} />
      </div>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
