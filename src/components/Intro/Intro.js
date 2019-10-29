import React from 'react';
import './Intro.scss';

function Intro( {className }) {
    return (
        <div className={className}>
            <p className="intro__item">You don't have anyone to talk?</p>
            <p className="intro__item">Your boyfriend is bussy?</p>
            <p className="intro__item">Your dog doesn't understand you?</p>
            <p className="intro__item">Talk with me!</p>
            <p className="intro__item">I don't sleep, I don't have headaches...</p>
            <p className="intro__item">I'm funny, I'm smart...</p>
            <p className="intro__item">I'm Aco!</p>
        </div>
    )
}

export default Intro;