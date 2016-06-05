import fetch from 'isomorphic-fetch';

function loading(loading) {
  return {
    type: 'POST_DETAIL_LOADING',
    loading
  }
}

export function requestPostDetail(id) {
  return dispatch => {
    dispatch(loading(true));

    return fetch(`/mocks/posts/${id}.json`)
            .then(response => response.json())
            .then(({result}) => {
              dispatch(receivePostDetail(result));
              dispatch(loading(false));
            });
  }
}

function receivePostDetail(detail) {
  return Object.assign({}, {
      type: 'RECEIVE_POST_DETAIL'
    }, detail);
}
