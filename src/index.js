/*!

=========================================================
* PKC Technology
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/css/nucleo-icons.css';
import 'assets/scss/dev.scss?v=1.2.0';
import 'assets/demo/demo.css';

import Index from 'views/Index.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
