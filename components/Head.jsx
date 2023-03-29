import React from 'react';
import ReactLogo from '../src/assets/react.svg'
const Head = () => {
    return (
        <div>
            <header className="head">
                <img
                    src={ReactLogo }
                    alt={'react logo'}
                />
                <h1>
                React Facts
                </h1>
                <h4>React Course-Project 1</h4>
            </header>
        </div>
    );
}

export default Head;
 