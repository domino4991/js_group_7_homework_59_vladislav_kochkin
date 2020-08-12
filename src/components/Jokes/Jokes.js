import React from 'react';
import './Jokes.css';

const Jokes = props => {
    return (
        <div className="Joke" style={props.duration ? {
            animationDuration: `${props.duration}s`
        } : null}>
            <img src={props.avatar} className="Joke-avatar" alt="Avatar"/>
            <p className="Joke-text">{props.value}</p>
        </div>
    );
};

export default Jokes;