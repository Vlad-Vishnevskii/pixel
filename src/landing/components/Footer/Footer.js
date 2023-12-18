import React from 'react';
import { FOOTER_IMAGES } from './Footer.images';
import { Socials } from '../Socials/Socials';

import './Footer.style.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <img
            className="footer_logo"
            src={FOOTER_IMAGES.LOGO}
            alt="Pixel"
            width={123}
            height={40}
          />
          <Socials />
        </div>
      </div>
    </div>
  );
};
