import React from 'react';
import { Link } from 'react-router-dom';

export const ForumPostItem = ({author, content, title, id, date, currentPath}) => (
    <Link className="list-item" to={`${currentPath}/${id}`}>
        <div>
            <h3 className="list-item__title">{title}</h3>
            <p className="list-item__sub-title">Posted at {date} by {author}</p>
            <p><strong>Post Body:</strong> <br/> {content}</p>
        </div>
    </Link>
);

export default ForumPostItem;