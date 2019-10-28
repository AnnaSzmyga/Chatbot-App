import React from 'react';
import Message from '../Message/Message';
import './MessagesList.scss';

function MessagesList({ messages }) {
    return (
        <ul className='messages-list'>
            {
                messages.map((message, i) => <Message key={i} message={message} />)
            }
        </ul>
    )
}

export default MessagesList;