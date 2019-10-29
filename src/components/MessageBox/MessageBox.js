import React from 'react';
import './MessageBox.scss';

function MessageBox({ handleSubmit, handleChange, inputText }) {
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Talk to me!"
                type="text"
                value={inputText}
                onChange={handleChange}
            />
            <button className="submit-btn" type="submit"><i class="far fa-paper-plane"></i></button>
        </form>
    )
}

export default MessageBox;