const postsDefaultState = [];

export default(state = postsDefaultState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state;
        case 'GET_POSTS':
            return action.posts;
        default:
            return state;
    }
};