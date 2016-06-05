const initialState = {
  posts: [],
  loading: true
};

export function posts(state = initialState, action) {
  switch(action.type) {
    case 'LOADING':
      return Object.assign({}, state, {
          loading: action.loading
        });

    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
          posts: action.posts
        });

    default:
      return state;
  }
}
