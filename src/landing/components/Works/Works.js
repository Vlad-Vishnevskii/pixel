import React, { useState } from 'react';
import './Works.style.scss';
import { Button } from './../Button/Button';
import { WORKS_DATA } from './Works.constants';
import { Star } from './assets/Star';

const ITERATION_SHOW_COUNT = 8;

export const Works = () => {
  const [worksLength, setWorksLength] = useState(ITERATION_SHOW_COUNT);

  const showMoreHanlder = () => {
    setWorksLength((prev) => prev + (WORKS_DATA.length - ITERATION_SHOW_COUNT));
  };

  return (
    <section className="works">
      <div className="container">
        <div className="works_wrapper">
          <div className="works_icon">
            <Star />
          </div>
          <div className="works_decor"></div>
          <h2 className="works_title">Работы выпускников</h2>
          <ul className="works_list">
            {WORKS_DATA.slice(0, worksLength).map((item, index) => (
              <li key={index} className={`works_item ${item.className}`}>
                <div className="works_imgWrapper">
                  <img
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt="Работа выпускника"
                  />
                </div>
              </li>
            ))}
          </ul>
          {worksLength < WORKS_DATA.length && (
            <Button
              className="button--white"
              text="Посмотреть ещё"
              type="button"
              onClick={showMoreHanlder}
            />
          )}
        </div>
      </div>
    </section>
  );
};
