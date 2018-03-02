import React from 'react';
import { Link } from 'react-router-dom';

export const ForumListItem = ({name, description, id, dispatch}) => (
    <Link className="list-item" to={`/dashboard`}>
        <div>
            <h3 className="list-item__title">{name}</h3>
            <p className="list-item__sub-title">{description}</p>
        </div>
    </Link>
);

export default ForumListItem;