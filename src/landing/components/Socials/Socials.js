import React from 'react';
import { SOCIALS_IMAGES } from './Socials.images';

import './Socials.style.scss';

export const Socials = () => {
  return (
    <ul className="socials">
      <li className="socials_item">
        <a className="socials_link" href="#/" aria-label="Перейти на страницу Вконтакте" rel="nofollow noopener noreferrer" target="_blank">
          <img
            src={SOCIALS_IMAGES.VK}
            alt="Вконтакте"
            width={26}
            height={26}
          />
        </a>
      </li>
      <li className="socials_item">
        <a className="socials_link" href="#/" aria-label="Перейти на страницу Youtube" rel="nofollow noopener noreferrer" target="_blank">
          <img
            src={SOCIALS_IMAGES.YOUTUBE}
            alt="Youtube"
            width={26}
            height={26}
          />
        </a>
      </li>
      <li className="socials_item">
        <a className="socials_link" href="#/" aria-label="Перейти на страницу Instagram" rel="nofollow noopener noreferrer" target="_blank">
          <img
            src={SOCIALS_IMAGES.INSTAGRAM}
            alt="Instagram"
            width={26}
            height={26}
          />
        </a>
      </li>
    </ul>
  );
};
