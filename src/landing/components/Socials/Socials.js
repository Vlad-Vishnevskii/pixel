import React from 'react';
import { SOCIALS_TEXT_CONTENT } from './Socials.constans';

import './Socials.style.scss';

export const Socials = () => {
  return (
    <ul className="socials">
      {SOCIALS_TEXT_CONTENT.map((item) => (
        <li className="socials_item" key={item.id}>
          <a
            className="socials_link"
            href="#/"
            aria-label={item.ariaLabel}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <img src={item.src} alt={item.alt} width={26} height={26} />
          </a>
        </li>
      ))}
    </ul>
  );
};
