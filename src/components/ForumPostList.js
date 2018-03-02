import React from 'react';
import { connect } from 'react-redux';
import ForumListItem from './ForumListItem';
import filterForums from '../selectors/filterForums';
import getForumThreads from '../selectors/getForumThreads';

export class ForumPostList extends React.Component {
    render() {
        const filteredForum = filterForums(this.props.posts, this.props.match.params.id)[0]
        const forumName = filteredForum.name;
        const posts = getForumThreads(filteredForum.posts);
        console.log(posts);

        return (
        <div className="content-container">
            <h1>Posts for {forumName}</h1>
            <div className="list-header">Posts</div>

            <div className="list-body">
                { posts.length === 0 ? (
                    <div>No Posts Found!</div>
                ) : (
                posts.map((post) => {
                return <ForumListItem key={post.id} {...post} />
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