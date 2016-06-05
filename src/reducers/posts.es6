const initialState = {
  posts: [],
  loading: true,
  active: 1
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

    case 'PAGINATION':
      return Object.assign({}, state, {
          active: action.active
        });

    default:
      return state;
  }
}
