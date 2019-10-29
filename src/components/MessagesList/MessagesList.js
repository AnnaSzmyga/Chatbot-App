import React from 'react';
import Message from '../Message/Message';
import Intro from '../Intro/Intro';
import './MessagesList.scss';

function MessagesList({ messages }) {
    return (
        <ul className='messages-list'>
            <Intro className={`intro${messages.length ? '--hidden' : ''}`} />
            {
                messages.map((message, i) => <Message key={i} message={message} />)
            }
        </ul>
    )
}

export default MessagesList;