import _ from 'lodash';

export default (posts, forumId) => {
    if (posts === undefined || forumId === undefined) {
        return [];
    } else {
        const filteredPosts = posts.filter((post) => {
            return post.forumId === forumId
        });

        return _.values(filteredPosts);
    }
}