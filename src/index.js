import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import Map from "./containers/map/map";
import MapExperiment from "./containers/map/mapExperiment"
import MapTrip from "./containers/map/mapTrip"
import { Tiny } from "./containers/tiny";
import { graphViz } from "./containers/graphViz"
import Material from "./containers/material";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { experimentApp } from "./reducers";
import { createStore } from "redux";
import { Basic } from "./containers/Form"
import { TypeMessage } from "./containers/typeWriter"
import { Articles } from "./containers/Articles"
import { Hover } from "./containers/hover"
import { mapThree } from './containers/mapThree'
import HttpsRedirect from 'react-https-redirect';


const store = createStore(experimentApp);

const routing = (
  <HttpsRedirect>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/mapexperiment" component={MapExperiment} />
          <Route exact path="/maptrips" component={MapTrip} />
          <Route exact path="/tiny" component={Tiny} />
          <Route exact path="/material" component={Material} />
          <Route exact path="/graph" component={graphViz} />
          <Route exact path="/form" component={Basic} />
          <Route exact path="/type" component={TypeMessage} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/hover" component={Hover} />
          <Route exact path="/mapthree" component={mapThree} />
        </div>
      </Router>
    </Provider>
  </HttpsRedirect>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
