import React from 'react';
import Message from '../Message/Message';

function MessagesList({ messages }) {
    return (
        <ul>
            {
                messages.map((message, i) => <Message key={i} message={message} />)
            }
        </ul>
    )
}

export default MessagesList;