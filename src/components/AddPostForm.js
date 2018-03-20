// TODO: Add ability to like individual posts and show like count
// Display likes on post
// add action for increasing likes (add user id to likes array if not already in it and not original poster)

import React from 'react';
import moment from 'moment';

export default class AddPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            date: moment(),
            user: this.props.user,
            forumId: this.props.forumId,
            postId: this.props.postId,
            likes: 0,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({content}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.content) {
            this.setState(() => ({ error: 'Please provide title and content.'}))

        } else {
            this.setState(() => ({error: ''}));
            const postData = {
                title: this.state.title,
                date: this.state.date.valueOf(),
                content: this.state.content,
                user: this.state.user,
                forumId: this.state.forumId,
                postId: this.state.postId,
                likes: this.state.likes
            };

            this.props.onSubmit(postData);
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error">{this.state.error}</p>}
                <input className="text-input" type="text" placeholder="Title" autoFocus value={this.state.title} onChange={this.onTitleChange} />
                <textarea className="textarea" placeholder="Add post content here" onChange={this.onContentChange} value={this.state.content}></textarea>
                <div>
                    <button className="button">Add Post</button>
                </div>
            </form>
        );
    }
}