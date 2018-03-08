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

export const addPost = () => ({
    type: 'ADD_POST'
});

export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            content = '',
            title = '',
            date = 0,
            user = { uid: 'null', name: 'Unknown'},
            forumId = '',
        } = postData;


        const post = {content, title, date, user, forumId};
        const existingPost = postData.postId;

        const url = (existingPost !== '' ? `posts/${existingPost}/replies` : 'posts');

        return database.ref(url).push(post).then((ref) => {
            dispatch(addPost());
        });
    }
};

// Delete whole thread (must be thread owner)

// Delete individual post (must be post owner)