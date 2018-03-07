import database from '../firebase/firebase';

export const getForums = (forums) => ({
    type: 'GET_FORUMS',
    forums
});

// Get all forums
export const startGetForums = () => {
    return (dispatch) => {
        return database.ref('forums').once('value').then((snapshot) => {
            console.log(snapshot);
            // Set forum list empty
           let forumList = [];
           snapshot.forEach((childSnapshot) => {
              console.log(childSnapshot.val());
              forumList.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
              })
           });

            dispatch(getForums(forumList));
        });
    };
};