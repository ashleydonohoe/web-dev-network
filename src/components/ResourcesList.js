import React from 'react';
import { Link } from 'react-router-dom';
const uuid = require('uuid/v4');


const ResourcesList = ({ resources }) => (
    <div className="list-body">
        { resources.map((resource) => {
            return (
                <a href={resource.url} key={uuid()} className="list-item" target="_blank">
                    <h3 className="list-item__title">{resource.title}</h3>
                    <p className="list-item__sub-title">{resource.description}</p>
                </a>
            )
        })}
    </div>
);

export default ResourcesList;
