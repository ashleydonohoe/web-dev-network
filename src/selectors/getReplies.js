import _ from 'lodash';

export default (replies => {
    if (replies === undefined) {
        return [];
    } else {
        return _.values(replies);
    }
});