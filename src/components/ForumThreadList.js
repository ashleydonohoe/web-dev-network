import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ForumPostItem from './ForumPostItem';
import getReplies from '../selectors/getReplies';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {
    render() {
        const forumURL = this.props.location.pathname;
        const post = this.props.post;
        let replies;

        if(!post) {
            console.log("no post")
        } else {
          replies = getReplies(post.replies);
        }

        return (
            <div className="content-container">
                <Link className="button button-reply-button" to={`${forumURL}/new`}>Add Reply</Link><br/>
                <h1>Posts for Thread: { post ? post.title : ""}</h1>
                <div className="list-header">Posts</div>
                <div className="list-body">
                    {/* Show first post if available*/}
                    { post === undefined ? (
                        <div>No Post Found!</div>
                    ) : (
                        // return first post
                        <ForumPostItem isThread={true } key={post.id} {...post}/>
                        )
                    }

                    {/* Show replies if they exist */}
                    { replies !== undefined && replies.length > 0 ? (
                        replies.map((reply) => {
                            return <ForumPostItem isThread={true} key={reply.id} {...reply} />
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

const mapStateToProps = (state, ownProps) => {
    return {
        post: getThreadPosts(state.posts, ownProps.match.params.postId)[0]
    }
};

export default connect(mapStateToProps)(ForumThreadList);