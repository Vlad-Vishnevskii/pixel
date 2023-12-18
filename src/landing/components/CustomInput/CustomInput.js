import React from 'react';

import './CustomInput.style.scss';

export const CustomInput = ({ type, name, placeholder, className=''}) => {
  return (
    <div className={`customInput ${className}`}>
      <label>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    </div>
  );
};
