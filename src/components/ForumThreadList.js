import React from 'react';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {
    render() {
        const filteredForum = filterForums(this.props.posts, this.props.match.params.forumId)[0];
        const posts = getForumThreads(filteredForum.posts);
        // Take forum name and thread id to get the posts for thread
        const post  = getThreadPosts(posts, this.props.match.params.postId)[0];
        const replies = getForumThreads(post.replies);
        console.log(replies);

        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Posts for Thread Titled: {post.title}</h1>
                </div>

                <div className="list-body">
                    { replies.length === 0 ? (
                        <div>No replies yet!</div>
                    ) : (
                        replies.map((reply) => {
                            return <ForumPostItem key={reply.id} {...reply} />
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

export default connect(mapStateToProps)(ForumThreadList);