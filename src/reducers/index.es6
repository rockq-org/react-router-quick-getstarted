import { combineReducers } from 'redux';
import { posts } from './posts.es6';
import { detail } from './post-detail.es6';

const rootReducer = combineReducers({
  posts,
  detail
});

export default rootReducer;
