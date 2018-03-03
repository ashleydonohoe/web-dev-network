import React from 'react';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {
    render() {
        // TODO: Write some kind of function that does a lot of this data conversion with fewer method calls
        const filteredForum = filterForums(this.props.posts, this.props.match.params.forumId)[0];
        const posts = getForumThreads(filteredForum.posts);
        // Take forum name and thread id to get the posts for thread
        const post  = getThreadPosts(posts, this.props.match.params.postId)[0];
        const replies = getForumThreads(post.replies);

        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Posts for Thread Titled: {post.title}</h1>
                </div>

                <div className="list-body">
                    <ForumPostItem key={post.id} {...post}/>
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