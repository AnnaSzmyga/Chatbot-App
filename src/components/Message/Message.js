import React from 'react';
import './Message.scss';

function Message({ message }) {
    return (
        <li className={`message message--${message.userMsg ? 'userMsg' : 'botMsg'}`}>
            <div className='message__wrapper' dangerouslySetInnerHTML={{ __html: message.content }}></div>
        </li>
    )
}

export default Message;