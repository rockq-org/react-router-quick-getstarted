import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import IndexView from './views/index-view.jsx';
import LoginView from './views/login.jsx';
import SignUpView from './views/sign-up-view.jsx';

let routers = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ IndexView } />
      <Route path="login" component={ LoginView } />
      <Route path="sign-up" component={ SignUpView } />
    </Route>
  </Router>
);

module.exports = routers;
