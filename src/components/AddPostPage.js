import React from 'react';
import { connect } from 'react-redux';
import AddPostForm from './AddPostForm';
import { startAddPost} from '../actions/posts';

export class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.startAddPost(post);
        this.props.history.push('/forums');
    };

    render() {
        const forumId = this.props.match.params.forumId;
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Post</h1>
                    </div>
                </div>
                <div className="content-container">
                    <AddPostForm user={this.props.user} forumId={forumId} onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddPost: (post) => dispatch(startAddPost(post))
    };
};

const mapStateToProps = (state, props) => {
    return {
        user: state.auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);