import React from 'react';
import { Quotes } from './assets/Quotes';
import { DekorLine } from './assets/Decor-line';

import './Review.style.scss';

export const Review = ({ className, nameStudent, src, texts, works }) => {
  return (
    <div className={`review ${className ? className : ''}`}>
      <div className="review_decor"></div>
      <div className="review_wrapper">
        <img
          className="review_image"
          src={src}
          alt="Виктория Пивкина"
          width={120}
          height={120}
        />
        <div className="review_textWrapper">
          <div className="review_textInner">
            <div className="review_quotes">
              <Quotes />
            </div>
            <p className="review_name">{nameStudent}</p>
            <div className="review_text">
              {texts.map((item) => (
                <p key={item.id}>{item.text}</p>
              ))}
            </div>
            <div className="review_quotes review_quotes--end">
              <Quotes />
            </div>
          </div>
        </div>
        <div className="review_works">
          <div className="review_decorLine">
            <DekorLine />
          </div>

          <p className="review_worksTitle">Работы студента</p>
          <ul className="review_worksList">
            {works.map((work) => (
              <li className="review_worksItem" key={work.id}>
                <img
                  src={work.src}
                  alt="Работа студента"
                  width={90}
                  height={67}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
