import React, { Component } from 'react';
import moment from 'moment';

class ChatInput extends Component {
    state = {
        text: ''
    };

    handleNewMessage = () => {
        console.log("handling");
        if(this.state.text !== '') {
            const message = {
                text: this.state.text,
                date: moment(),
                user: this.props.user
            };

            this.props.onNewMessage(message);

            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <div className="chat-input-box">
                <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value})} type="text"/>
                <button onClick={this.handleNewMessage}>Send</button>
            </div>
        );
    }
}

export default ChatInput;
