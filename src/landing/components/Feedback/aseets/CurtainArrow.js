import React from 'react';

export const CurtainArrow = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      className={className}
    >
      <circle
        cx="15.5859"
        cy="15.6777"
        r="14.25"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5537 21.1777L19.3898 16.042C19.4779 15.9644 19.4806 15.8281 19.3957 15.7471L13.5537 10.1777"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
