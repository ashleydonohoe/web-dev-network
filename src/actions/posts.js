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

export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            content = '',
            title = '',
            date = 0,
            user = { uid: 'null', name: 'Unknown'},
            forumId = '',
            id = uuid()
        } = postData;


        const post = {content, title, date, user, forumId, id};
        const existingPost = postData.postId;

        const url = (existingPost !== '' ? `posts/${existingPost}/replies/${id}` : `posts/${id}`);

        return database.ref(url).set(post).then((ref) => {
            dispatch(startGetPosts());
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

// export const editPost = () = ({
//    type: 'EDIT_POST'
// });
//
// export const startEditPost = (postData) => {
//     return (dispatch) => {
//
//         // const post = {content, title, date, user, forumId, id};
//         // const existingPost = postData.postId;
//
//         // const url = (existingPost !== '' ? `posts/${existingPost}/replies/${id}` : `posts/${id}`);
//         //
//         // return database.ref(url).set(post).then((ref) => {
//         //     dispatch(startGetPosts());
//         // });
//     }
// };