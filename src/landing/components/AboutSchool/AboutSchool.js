import React from 'react';
// import { ABOUT_SCHOOL_IMAGES } from './AboutSchool.images';

import './AboutSchool.style.scss';

export const AboutSchool = () => {
  return (
    <section className="aboutSchool">
      <div className="container">
        <h2 className="aboutSchool_title">О ШКОЛЕ</h2>
        <ul className="aboutSchool_list">
          <li className="aboutSchool_item">
            <p className="aboutSchool_numbers">6 лет</p>
            <p className="aboutSchool_text">Обучаем иллюстраторов и&nbsp;motion-дизайнеров</p>
          </li>
          <li className="aboutSchool_item">
            <p className="aboutSchool_numbers">2 627</p>
            <p className="aboutSchool_text">Выпускников курса</p>
          </li>
          <li className="aboutSchool_item">
            <p className="aboutSchool_numbers">1 400+</p>
            <p className="aboutSchool_text">Отзывов от&nbsp;реальных людей с&nbsp;работами с&nbsp;курса в&nbsp;нашей группе&nbsp;VK</p>
          </li>
          <li className="aboutSchool_item">
            <p className="aboutSchool_numbers">156 000+</p>
            <p className="aboutSchool_text">Подписчиков на&nbsp;YouTube и&nbsp;более 300 образовательных видео на&nbsp;нашем канале</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
