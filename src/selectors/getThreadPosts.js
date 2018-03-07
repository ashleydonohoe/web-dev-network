export default (posts, postId) => {
    return posts.filter((post) => {
        return post.id === postId
    });
};