import database from '../firebase/firebase';
import uuid from 'uuid/v4';

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
            id = uuid(),
            likes = 0
        } = postData;


        const post = {content, title, date, user, forumId, id, likes};
        const existingPost = postData.postId;

        const url = (existingPost !== '' ? `posts/${existingPost}/replies/${id}` : `posts/${id}`);

        return database.ref(url).set(post).then((ref) => {
            dispatch(addPost());
        });
    }
};

// Delete whole thread (must be thread owner)
export const removePost = () => ({
   type: 'REMOVE_POST'
});

export const startRemovePost = (postInfo = {}) => {
    const {threadId, replyId, isReply } = postInfo;
    const url = isReply ? `posts/${threadId}/replies/${replyId}` : `posts/${threadId}`;
    return (dispatch) => {
      return database.ref(url).remove().then(() => {
         dispatch(removePost());
      });
  }
};