import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index.es6';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(preloadedState) {

  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, createLogger()));

  return store;
}
