import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Map from './containers/map'
import { Tiny } from './containers/tiny'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route path="/map" component={Map} />
            <Route exact path="/" component={App} />
            <Route exact path="/tiny" component={Tiny} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
