import React from 'react';
import { render } from 'react-dom';
import Routers from './routers.jsx';
import configureStore from './store/index.es6';
import { Provider } from 'react-redux';

let store = configureStore();

render(
  <Provider store={ store }>
    { Routers }
  </Provider>
  , document.getElementById('app'));
