import React from 'react';
import { HEADER_IMAGES } from './Header.images';

import './Header.style.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header_rightBg" />
      <div className="header_leftBg" />
      <div className="header_top">
        <img
          className="header_logo"
          src={HEADER_IMAGES.LOGO}
          alt="Pixel"
          width={72}
          height={20}
        />
        <button className="header_orderBtn" type="button">
          Оставить заявку
        </button>
      </div>

      <h1 className="header_title">Курс Иллюстрации</h1>
      <div className="header_titleFrame">
        <span>в Adobe Illustrator</span>
      </div>

      <img className="header_catImg" src={HEADER_IMAGES.CAT} />
    </div>
  );
};
