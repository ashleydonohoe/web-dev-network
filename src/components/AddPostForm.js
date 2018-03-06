// TODO: Make a form that allows the user to add a post/thread with title and content. Their name should be obtained from firebase's auth system, and the date will use moment(). After saving the post, the user should be directed back to the thread itself

//TODO: Create action and reducer for ADD_POST that will save the post/reply to the correct post or reply on Firebase and update the state of the application as required

// TODO: Find a way to subscribe to firebase so all new posts get added to the state automatically to replace the call to "once"

// TODO: Find a way to create user accounts with settings, like screenname, profile image, and bio to add to the site's social media feature

// TODO: Add ability to like individual posts and show like count

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
            console.log('submit');
            this.props.onSubmit({
                title: this.state.title,
                date: this.state.date,
                content: this.state.content,
                user: this.state.user
            });
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