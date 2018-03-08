import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumPostItem from './ForumPostItem';
import getForumThreads from '../selectors/getForumThreads';

export class ForumPostList extends React.Component {
    render() {
        const forumURL = this.props.location.pathname;
        const posts = this.props.posts;

        return (
        <div className="content-container">
            <Link className="button button-add-post" to={`${forumURL}/new`}>Add Post</Link>
            <h1>Posts for {forumURL}</h1>
            <div className="list-header">Posts</div>

            <div className="list-body">
                { posts.length === 0 ? (
                    <div>No Posts Found!</div>
                ) : (
                posts.map((post) => {
                return <ForumPostItem key={post.id} currentPath={forumURL} {...post} />
                })
            )}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getForumThreads(state.posts, ownProps.match.params.id)
    }
};

export default connect(mapStateToProps)(ForumPostList);