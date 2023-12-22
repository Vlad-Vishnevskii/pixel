import React from 'react';

import './CustomInput.style.scss';

export const CustomInput = ({
  type,
  name,
  placeholder,
  className = '',
  change,
  value,
  isRequired,
}) => {
  const changeHandler = (value) => {
    if (name === 'name') {
      change((prev) => ({
        ...prev,
        name: value,
      }));
    } else {
      change((prev) => ({
        ...prev,
        login: value,
      }));
    }
  };
  return (
    <div className={`customInput ${className}`}>
      <label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
          required={isRequired}
        />
      </label>
    </div>
  );
};
