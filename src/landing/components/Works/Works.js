import React, { useState } from 'react';
import './Works.style.scss';
import { Button } from './../Button/Button';
import { WORKS_DATA } from './Works.constants';
import { Star } from './assets/Star';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';

const INITIAL_SHOW_COUNT = 8;
const ITERATION_SHOW_COUNT = 3;

export const Works = () => {
  const [worksLength, setWorksLength] = useState(INITIAL_SHOW_COUNT);

  const showMoreHanlder = () => {
    setWorksLength((prev) => prev + ITERATION_SHOW_COUNT);
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
          <PhotoProvider>
            <ul className="works_list">
              {WORKS_DATA.slice(0, worksLength).map((item, index) => (
                <li key={index} className={`works_item ${item.className}`}>
                  <div className="works_imgWrapper">
                    <PhotoView src={item.img}>
                      <img
                        src={item.img}
                        width={item.width}
                        height={item.height}
                        alt="Работа выпускника"
                      />
                    </PhotoView>
                  </div>
                </li>
              ))}
            </ul>
          </PhotoProvider>
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
