import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumPostItem from './ForumPostItem';
import getReplies from '../selectors/getReplies';
import getThreadPosts from '../selectors/getThreadPosts';
import { startRemovePost, startLikePost } from '../actions/posts';
const uuid = require('uuid/v1');

export class ForumThreadList extends React.Component {
    handleDelete = (replyId, isReply) => {
        const threadId = this.props.post.id;
        const postInfo = {
            threadId,
            replyId,
            isReply
        };

        this.props.startRemovePost(postInfo);
        this.props.history.push('/');
    };

    handleLikePost = (replyId, isReply, currentLikes) => {
        const threadId = this.props.post.id;
        const numberOfLikes =  currentLikes + 1;
        const postInfo = {
            threadId,
            replyId,
            isReply,
            numberOfLikes
        };

        console.log(postInfo);
        this.props.startLikePost(postInfo);

    };

    render() {
        const forumURL = this.props.location.pathname;
        const post = this.props.post;
        let replies, userId;

        if(!post) {
            console.log("no post")
        } else {
            userId = post.user.uid;
            replies = getReplies(post.replies);
        }

        const forumCategory = this.props.match.params.forumId;
        const isPoster = (userId === this.props.user.uid);

        return (
            <div className="content-container">
                <Link className="button button-reply-button" to={`${forumURL}/new`}>Add Reply</Link><br/>
                <h1>{ post ? post.title : ""} on the <Link to={`/forums/${forumCategory}`}>{forumCategory}</Link> forum</h1>
                <div className="list-header">Posts</div>
                <div className="list-body">
                    {/* Show first post if available*/}
                    { post === undefined ? (
                        <div>No Post Found!</div>
                    ) : (
                        // return first post
                        <ForumPostItem onLike={this.handleLikePost} isThread={true } key={post.id} isReply={false} {...post} onDelete={this.handleDelete} isPoster={isPoster}/>
                        )
                    }

                    {/* Show replies if they exist */}
                    { replies !== undefined && replies.length > 0 ? (
                        replies.map((reply) => {
                            return <ForumPostItem onLike={this.handleLikePost} isReply={true} isThread={true} key={uuid()} isPoster={isPoster}{...reply} onDelete={this.handleDelete} />
                        })
                        ) : (
                        <p>No Replies Available</p>
                        )
                    }
                </div>
            </div>
        )


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startRemovePost: (id) => dispatch(startRemovePost(id)),
        startLikePost: (postInfo) => dispatch(startLikePost(postInfo))
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        post: getThreadPosts(state.posts, ownProps.match.params.postId)[0],
        user: state.auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumThreadList);