import React from 'react';
import ReactDOM from 'react-dom';
import Linkify from 'react-linkify';

class MessageList extends React.Component {
    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {messages, currentUser} = this.props;
        return (
            <div className="message-list" id="message-list">
                <ul>
                    {messages.map((message, index) => {
                        if(message.user.uid !== currentUser.uid) {
                            return (
                                <Linkify key={index} properties={{target: '_blank'}}><li><span className="username">{message.user.username}</span>: {message.text}</li></Linkify>
                            )
                        } else {
                            return (
                                <Linkify key={index} properties={{target: '_blank'}}><li><span className="username active-user">{message.user.username}</span>: {message.text}</li></Linkify>
                            )
                        }
                    })}
                </ul>
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

export default MessageList;
