import React from 'react';
import { SOCIALS_IMAGES } from './Socials.images';

import './Socials.style.scss';

export const Socials = () => {
  return (
    <ul className="socials">
      <li className="socials_item">
        <img
          src={SOCIALS_IMAGES.VK}
          alt="Вконтакте"
          width={26}
          height={26}
        />
      </li>
      <li className="socials_item">
        <img
          src={SOCIALS_IMAGES.YOUTUBE}
          alt="Youtube"
          width={26}
          height={26}
        />
      </li>
      <li className="socials_item">
        <img
          src={SOCIALS_IMAGES.INSTAGRAM}
          alt="Instagram"
          width={26}
          height={26}
        />
      </li>
    </ul>
  );
};
