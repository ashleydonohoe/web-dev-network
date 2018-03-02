export default (posts) => {
    return posts === undefined ? [] :
     Object.keys(posts).map(key => {
        return posts[key];
    });
};