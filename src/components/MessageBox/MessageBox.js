import React from 'react';
import './MessageBox.scss';

function MessageBox({ handleSubmit, handleChange, inputText }) {
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Talk with me!"
                type="text"
                value={inputText}
                onChange={handleChange}
            />
        </form>
    )
}

export default MessageBox;