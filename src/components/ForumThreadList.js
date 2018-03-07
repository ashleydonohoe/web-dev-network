import React from 'react';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {

    render() {
        const post = this.props.post;

        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Posts for Thread: { post ? post.title : ""}</h1>
                </div>

                <div className="list-body">
                    { post === undefined ? (
                        <div>No Post Found!</div>
                    ) : (
                        // return first post
                        <ForumPostItem key={post.id} {...post}/>
                    )
                    }
                </div>

                {/*<div className="list-body">*/}
                {/*<ForumPostItem key={post.id} {...post}/>*/}
                {/*{ replies.length === 0 ? (*/}
                {/*<div>No replies yet!</div>*/}
                {/*) : (*/}
                {/*replies.map((reply) => {*/}
                {/*return <ForumPostItem key={reply.id} {...reply} />*/}
                {/*})*/}
                {/*)}*/}
                {/*</div>*/}
                {/*) :*/}
                {/*<p>No post found</p>*/}
                {/*}*/}

            </div>
        )

        // const postId = (this.props.match.params.postId);
        // const post = (getThreadPosts(this.props.posts, postId))[0];
        // const title = post.title || 'No Title';
        // const filteredForum = filterForums(this.props.posts, this.props.match.params.forumId)[0];
        // const posts = getForumThreads(filteredForum.posts);
        // // Take forum name and thread id to get the posts for thread
        // const post  = getThreadPosts(posts, this.props.match.params.postId)[0];
        // const replies = getForumThreads(post.replies);

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: getThreadPosts(state.posts, ownProps.match.params.postId)[0]
    }
};

export default connect(mapStateToProps)(ForumThreadList);