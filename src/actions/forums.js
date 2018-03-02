import database from '../firebase/firebase';

export const getForums = (forums) => ({
    type: 'GET_FORUMS',
    forums
});

// Get all forums
export const startGetForums = () => {
    return (dispatch) => {
        return database.ref('forums').once('value').then((snapshot) => {
            // Set forum list empty
           let forumList = [];
           console.log("Trying to get forum list");
           snapshot.forEach((childSnapshot) => {
              console.log(childSnapshot.val());
           });

            dispatch(getForums(forumList));
        });
    };
};