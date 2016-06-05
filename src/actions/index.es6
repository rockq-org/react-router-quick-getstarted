import fetch from 'isomorphic-fetch';
// import * as types from '../constants/ActionTypes';

function loading (loading) {
  return {
    type: 'LOADING',
    loading
  }
}

export function requestPosts() {
  return function (dispatch) {

    dispatch(loading(true));

    return fetch('/mocks/posts.json')
            .then(reponse => reponse.json())
            .then(({result}) => {
              dispatch(receivePosts(result));
              dispatch(loading(false));
            });
  }
}

function receivePosts(posts) {
  return {
    type: 'RECEIVE_POSTS',
    posts
  }
}
