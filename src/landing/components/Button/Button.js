import React from 'react';
import './Button.style.scss';

export const Button = ({text, type, mod}) => {
  return (
    <button className={`button ${mod ? mod : ''}`} type={type}> {text}
    </button>
  );
};
