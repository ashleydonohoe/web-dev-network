import _ from 'lodash';

export default (posts) => {
    return posts === undefined ? [] : _.values(posts);
};