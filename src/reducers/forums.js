const forumsDefaultState = [];

export default(state = forumsDefaultState, action) => {
  switch(action.type) {
      case 'GET_FORUMS':
          return action.forums;
  }
};