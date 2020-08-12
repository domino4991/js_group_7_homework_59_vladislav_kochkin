import React from 'react';
import './Button.css';

const Button = React.memo(props => (
    <button className="Button" type={props.type} onClick={props.clicked ? props.clicked : null}>{props.label}</button>
));

export default Button;