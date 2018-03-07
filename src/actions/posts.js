import database from '../firebase/firebase';

export const getPosts = (posts) => ({
    type: 'GET_POSTS',
    posts
});

// Get all forums
export const startGetPosts = () => {
    return (dispatch) => {
        return database.ref('posts').on('value', (snapshot) => {
            // Set forum list empty
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });

            });
            dispatch(getPosts(posts));
        });
    };
};

export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            content = '',
            title = '',
            date = 0,
            user = { uid: 'null', name: 'Unknown'},
            forumId = ''
        } = postData;


        const post = {content, title, date, user, forumId};

        return database.ref(`posts`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        });
    }
};