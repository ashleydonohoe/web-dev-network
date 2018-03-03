export default (thread, postId) => {
    return thread.filter((thread) => {
        return thread.id === postId
    });
};