const initialState = {
  loading: true,
  tags: ''
};

export function detail(state = initialState, action) {
  switch(action.type) {
    case 'POST_DETAIL_LOADING':
      return Object.assign({}, state, {
          loading: action.loading
        });
    case 'RECEIVE_POST_DETAIL':
      return Object.assign({}, state, action);

    default:
      return state;
  }
}
