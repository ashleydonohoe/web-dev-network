const postsDefaultState = [];

export default(state = postsDefaultState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state;
        case 'GET_POSTS':
            return action.posts;
        case 'REMOVE_POST':
            return state;
        default:
            return state;
    }
};