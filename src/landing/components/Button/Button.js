import React from 'react';
import './Button.style.scss';

export const Button = ({ text, type, className }) => {
  return (
    <button className={`button ${className ? className : ''}`} type={type}> {text}
    </button>
  );
};
