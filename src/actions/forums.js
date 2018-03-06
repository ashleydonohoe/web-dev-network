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

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (postData = {}) => {
    console.log(postData);
    return (dispatch) => {
        const {
            content = '',
            title = '',
            date = 0,
            user = { uid: 'null', name: 'Unknown'},
            forumId = ''
        } = postData;


        const post = {content, title, date, user};

        console.log(post);
        console.log(forumId);

        return database.ref(`forums/${forumId}/posts`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    }
};