import React from 'react';
import './Button.style.scss';

export const Button = ({text, type}) => {
  return (
    <button className="button" type={type}> {text}
    </button>
  );
};
