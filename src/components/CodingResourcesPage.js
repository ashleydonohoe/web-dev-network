import React from 'react';
import ResourcesList from './ResourcesList';
import resources from '../resourceData';

class CodingResourcesPage extends React.Component {
    state = {
        searchTerm: '',
        resources: resources
    };

    onChange = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredResources = resources.filter((resource) => {
            return resource.title.toLowerCase().includes(search) || resource.description.toLowerCase().includes(search);
        });

        this.setState({
            searchTerm: search,
            resources: filteredResources
        });
    };

    render() {
        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Coding Resources</h1>
                </div>
                <div className="list-header">
                    <input className="text-input search-field" value={this.state.searchTerm} placeholder="Search for a resource here" onChange={this.onChange}/>
                </div>
                <ResourcesList resources={this.state.resources} />
            </div>
        )
    }
}

export default CodingResourcesPage;
