import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './container/main.js';
import Impress from './container/impress.js';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/impressum" component={Impress} />
  </Router>
);


export default routes;
