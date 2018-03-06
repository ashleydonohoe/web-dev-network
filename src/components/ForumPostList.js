import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';

export class ForumPostList extends React.Component {
    render() {
        const forumURL = this.props.location.pathname;
        const filteredForum = filterForums(this.props.posts, this.props.match.params.id)[0];
        const forumName = filteredForum.name;
        console.log(forumName);
        const posts = getForumThreads(filteredForum.posts);
        console.log(posts);

        return (
        <div className="content-container">
            <Link className="button button-add-post" to={`${forumURL}/new`}>Add Post</Link>
            <h1>Posts for {forumName}</h1>
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

const mapStateToProps = (state) => {
    return {
        posts: state.forums
    }
};

export default connect(mapStateToProps)(ForumPostList);