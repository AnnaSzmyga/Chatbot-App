import React from 'react';
import './Heading.scss';

function Heading() {
    return (
        <div className='heading'>
            <div className='heading__image' style={{backgroundImage: `url(/images/robot.png)`}}></div>
            <h1 className='heading__title'><span>T</span>alking <span>W</span>ith <span>A</span>co!</h1>
        </div>
    )
}

export default Heading;