const forumsDefaultState = [];

export default(state = forumsDefaultState, action) => {
  switch(action.type) {
      case 'ADD_POST':
          return [action.post, ...state];
      case 'GET_FORUMS':
          return action.forums;
      default:
          return state;
  }
};