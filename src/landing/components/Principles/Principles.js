import React from 'react';
import { PRINCIPLES_IMAGES } from './Principles.images';

import './Principles.styles.scss';

export const Principles = () => {
  return (
    <div className="container">
      <div className="principles">
        <img className="principles_img" src={PRINCIPLES_IMAGES.PENCIL} alt="" />
        <h2 className="principles_title">
          Независимо от&nbsp;того, иллюстрация&nbsp;&mdash; это работа для вас
          или хобби:
        </h2>
        <p className="principles_description">
          Успех = свобода творчества + крепкий профессиональный фундамент
        </p>
        <h3 className="principles_title2">Наши принципы:</h3>
        <ul className="principles_list">
          <li className="principles_item">Каждый студент — уникален. </li>
          <li className="principles_item">
            Не&nbsp;убиваем творческое начало, а&nbsp;наоборот, подхватываем
            ваше виденье и&nbsp;идею, и&nbsp;помогаем довести
            ее&nbsp;до&nbsp;хорошего результата.
          </li>
          <li className="principles_item">
            Улучшаем процесс обучения и&nbsp;делаем всё, чтобы вы&nbsp;могли
            по&nbsp;максимуму сосредоточиться на&nbsp;творчестве.
          </li>
        </ul>
      </div>
    </div>
  );
};
