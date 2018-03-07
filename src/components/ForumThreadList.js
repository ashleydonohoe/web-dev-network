import React from 'react';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import getReplies from '../selectors/getReplies';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {

    render() {
        const post = this.props.post;
        let replies;

        if(!post) {
            console.log("no post")
        } else {
          replies = getReplies(post.replies);
          console.log(replies);
        }

        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Posts for Thread: { post ? post.title : ""}</h1>
                </div>

                <div className="list-body">
                    {/* Show first post if available*/}
                    { post === undefined ? (
                        <div>No Post Found!</div>
                    ) : (
                        // return first post
                        <ForumPostItem key={post.id} {...post}/>
                        )
                    }

                    {/* Show replies if they exist */}
                    { replies !== undefined && replies.length > 0 ? (
                        replies.map((reply) => {
                            return <ForumPostItem key={reply.id} {...reply} />
                        })
                        ) : (
                        <p>No Replies Available</p>
                        )
                    }
                </div>
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