import React from 'react';
import ResourcesList from './ResourcesList';
import resources from '../resourceData';

class CodingResourcesPage extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Coding Resources</h1>
                </div>
                <ResourcesList resources={resources} />
            </div>
        )
    }
}

export default CodingResourcesPage;
