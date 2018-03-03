import React from 'react';
import { connect } from 'react-redux';
import ForumPostItem from './ForumPostItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';
import getThreadPosts from '../selectors/getThreadPosts';

export class ForumThreadList extends React.Component {
    render() {
        //TODO: Get all of thread's posts
        const filteredForum = filterForums(this.props.posts, this.props.match.params.forumId)[0];
        const posts = getForumThreads(filteredForum.posts);
        // Take forum name and thread id to get the posts for thread
        const postsForThread  = getThreadPosts(posts, this.props.match.params.postId);
        console.log(postsForThread);
        // console.log(postsForThread[3]);
        // Thread id = this.props.match.params.postId
        // const filteredForum = filterForums(this.props.posts, this.props.match.params.id)[0]
        // const forumName = filteredForum.name;
        // const posts = getForumThreads(filteredForum.posts);
        // console.log(posts);
        //
        return (
            <div className="content-container">
                <div className="list-header">
                    <h1>Posts for Thread</h1>
                </div>

                {/*<div className="list-body">*/}
                    {/*{ posts.length === 0 ? (*/}
                        {/*<div>No Posts Found!</div>*/}
                    {/*) : (*/}
                        {/*posts.map((post) => {*/}
                            {/*return <ForumPostItem key={post.id} {...post} />*/}
                        {/*})*/}
                    {/*)}*/}
                {/*</div>*/}
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