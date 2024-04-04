import React from 'react';
import './titlestyle.css';

const Title = (props) => {
    return (
    <h1> ~{props.name}~{props.lastName}</h1 >);
    }

export default Title; 