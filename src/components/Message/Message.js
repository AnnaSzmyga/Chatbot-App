import React from 'react';

function Message({ message }) {
    console.log({message});
    return (
        <li>{message.content}</li>
    )
}

export default Message;