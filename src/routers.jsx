import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import IndexView from './containers/index-view.jsx';
import LoginView from './containers/login.jsx';
import SignUpView from './containers/sign-up-view.jsx';
import PostView from './containers/post-view.jsx';

let routers = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="post/:id" component={ PostView } />
      <IndexRoute component={ IndexView } />
      <Route path="login" component={ LoginView } />
      <Route path="sign-up" component={ SignUpView } />
    </Route>
  </Router>
);

module.exports = routers;
