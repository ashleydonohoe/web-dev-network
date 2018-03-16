import React, {Component} from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { startAddMessage } from '../actions/chat';
import { connect } from 'react-redux';

export class ChatRoomPage extends Component {
    handleNewMessage = (message) => {
        console.log("New Message", message);
        this.props.startAddMessage(message);
    };

    render() {
        const { messages, auth } = this.props;
        return (
            <div className="content-container">
                <div className="top-bar">
                    <span>Web Dev Network Chat</span>
                </div>
                <div className="container">
                    <MessageList messages={messages} currentUser={auth}/>
                </div>
                <ChatInput user={auth} onNewMessage={this.handleNewMessage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddMessage: (message) => dispatch(startAddMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);