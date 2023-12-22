import React from 'react';
import './Button.style.scss';

export const Button = ({ text, type, className, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className ? className : ''}`}
      type={type}
      disabled={isDisabled}
    >
      {' '}
      {text}
    </button>
  );
};
