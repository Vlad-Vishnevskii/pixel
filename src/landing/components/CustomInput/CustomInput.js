import React from 'react';

import './CustomInput.style.scss';

export const CustomInput = ({type, name, placeholder, mod}) => {
  return (
    <div className={`customInput ${mod ? mod : ''}`}>
      <label>
        <input type={type} name={name} placeholder={placeholder}/>
      </label>
    </div>
  );
};
