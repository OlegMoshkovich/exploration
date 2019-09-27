import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './containers/map'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route path="/map" component={Map} />
            <Route exact path="/" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
