import React from 'react';
import ForumListItem from './ForumListItem';

const ForumPostList = ({posts}) => (
    <div className="content-container">
        <h1>Forums</h1>
        {/* Create row for each forum category created */}
        <div className="list-header">Categories</div>

        <div className="list-body">
            { forums.length === 0 ? (
                <div>No Forums Found!</div>
            ) : (
                forums.map((forum) => {
                    return <ForumListItem key={forum.id} {...forum} />
                })
            )}
        </div>

    </div>
);

export default ForumPostList;