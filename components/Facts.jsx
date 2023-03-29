import React from 'react';
import { allFacts } from './Allfacts'
import ReactLogo from '../src/assets/reactBack.svg'

const Facts = () => {
    return (
        <div className="Facts">
            <img
                src={ReactLogo}
                alt={'react logo'}
            />
        <h1>Fun Facts About React</h1>
            <div>
                {allFacts.map(facts =>
                   <ul>
                       <li key={facts.id}>
                       {facts.fact}
                       </li>
                   </ul>
                )}
            </div>
        </div>
    );
}

export default Facts;
