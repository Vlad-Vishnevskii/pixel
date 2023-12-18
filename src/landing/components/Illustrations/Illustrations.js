import React from 'react';
import {
  ILLUSTRATIONS_IMAGES,
  ILLUSTRATIONS_ICONS,
} from './Illustrations.images';
import { Star } from '../Icons/Star';

import './Illustrations.styles.scss';

export const Illustrations = () => {
  return (
    <div className="illustrations">
      <img
        className="illustrations_arrowDown"
        src={ILLUSTRATIONS_ICONS.ARROW_DOWN}
        alt="arrow"
      />
      <div className="illustrations_list">
        {ILLUSTRATIONS_IMAGES.map((imagePath, index) => (
          <img src={imagePath} key={index} />
        ))}
        <div className="illustrations_frame illustrations_frame--blue">
          Все это нарисовано мышкой!
        </div>
        <div className="illustrations_frame illustrations_frame--red ">
          Графический планшет <b>не нужен</b>
        </div>
      </div>
      <div className="illustrations_textBlock container">
        <h2>
          10 иллюстраций в портфолио к концу курса
          <div className="illustrations_starSmall">
            <Star />
          </div>
        </h2>
        <p>
          Научим рисовать&nbsp;векторные иллюстрации, иконки и паттерны
          с&nbsp;нуля.
          <div className="illustrations_starBig">
            <Star />
          </div>
        </p>
      </div>
    </div>
  );
};