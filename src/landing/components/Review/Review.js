import React from 'react';

import './Review.style.scss';

export const Review = ({ mod, nameStudent, src, text, works }) => {
  return (
    <div className={`review ${mod ? mod : ''}`}>
      <div className="review_decor">
      </div>
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
            <p className="review_name">{nameStudent}</p>
            <p className="review_text">{text}</p>
          </div>
        </div>
        <div className="review_works">
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