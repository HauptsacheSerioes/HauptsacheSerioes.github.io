import React from 'react';
import { Router, Route } from 'react-router';
import Main from './container/main.js';
import Impress from './container/impress.js';


const routes = (
  <Router>
    <Route path="/" component={Main} >
      <Route path="/impressum" component={Impress} />
    </Route>
  </Router>
);


export default routes;
