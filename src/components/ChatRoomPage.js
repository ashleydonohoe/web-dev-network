import React, {Component} from 'react';
import MessageList from './MessageList';
import { connect } from 'react-redux';

const ChatRoomPage = ({messages, auth}) => (
    <div className="content-container">
        <h1>Chat Room Page</h1>
        <div className="top-bar">
            <span>Web Dev Network Chat</span>
        </div>
        <div className="container">
            <MessageList messages={messages} currentUser={auth}/>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        auth: state.auth
    };
};

export default connect(mapStateToProps)(ChatRoomPage);