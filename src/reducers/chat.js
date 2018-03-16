const messagesDefaultState = [];

export default(state = messagesDefaultState, action) => {
    switch(action.type) {
        case 'GET_MESSAGES':
            return action.messages;
        default:
            return state;
    }
};