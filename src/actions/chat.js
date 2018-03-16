import database from '../firebase/firebase';

export const getMessages = (messages) => ({
    type: 'GET_MESSAGES',
    messages
});

// Get all forums
export const startGetMessages = () => {
    return (dispatch) => {
        return database.ref('chat').on('value', (snapshot) => {
            // Set forum list empty
            let messages = [];
            snapshot.forEach((childSnapshot) => {
                messages.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });

            });
            dispatch(getMessages(messages));
        });
    };
};

export const startAddMessage = (message) => {
    return (dispatch) => {
        return database.ref('chat').push(message).then((ref) => {
            console.log('message added');
        });
    }
};