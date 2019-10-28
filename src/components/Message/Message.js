import React from 'react';
import './Message.scss';

function Message({ message }) {
    console.log({message});
    return (
        <li className={`message message--${message.userMsg ? 'userMsg' : 'botMsg'}`}>
            <div className='message__wrapper'>{message.content}</div>
        </li>
    )
}

export default Message;