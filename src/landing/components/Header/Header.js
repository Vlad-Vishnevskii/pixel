import React from 'react';
import { HEADER_IMAGES } from './Header.images';
import { useBoolean } from '../../hooks';
import { ModalOrder } from '../ModalOrder/ModalOrder';

import './Header.style.scss';

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useBoolean(false);

  return (
    <div className="header">
      <div className="header_rightBg" />
      <div className="header_leftBg" />
      <div className="header_top">
        <a className="header_logo" href="/">
          <img src={HEADER_IMAGES.LOGO} alt="Pixel" width={72} height={20} />
        </a>
        <div className="header_orderBtnWrapper">
          <button
            onClick={setIsOpen.on}
            className="header_orderBtn"
            type="button"
          >
            Оставить заявку
          </button>
          <img
            className="header_orderBtnDecor"
            src={HEADER_IMAGES.ORDER_BTN_DECOR}
            alt="bg"
          />
          <img
            className="header_orderBtnDecor2"
            src={HEADER_IMAGES.ORDER_BTN_DECOR_2}
            alt="bg"
          />
        </div>
      </div>

      <h1 className="header_title">
        <img
          className="header_titleDecor"
          src={HEADER_IMAGES.TITLE_DECOR}
          alt="bg"
        />
        <span>
          Курс
          <br /> Иллюстрации
        </span>
      </h1>
      <div className="header_titleFrame">
        <span>в Adobe Illustrator</span>
        <img
          className="header_titleFrameDecor"
          src={HEADER_IMAGES.BUTTON_DECOR}
          alt="bg"
        />
        <img
          className="header_titleFrameStars"
          src={HEADER_IMAGES.BUTTON_STARS}
          alt="bg"
        />
      </div>

      <img
        className="header_adobeIcon"
        src={HEADER_IMAGES.ADOBE_ICON}
        alt="AI"
      />
      <img className="header_catImg" src={HEADER_IMAGES.CAT} alt="cat" />
      <ModalOrder modalIsOpen={modalIsOpen} closeModal={setIsOpen.off} />
    </div>
  );
};
