import React from 'react';
import './navbar.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;