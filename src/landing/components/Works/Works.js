import React from 'react';
import './Works.style.scss';
import { Button } from './../Button/Button';
import { WORKS_DATA } from './Works.constants';
import { Star } from './assets/Star';

export const Works = () => {
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
            {WORKS_DATA.map((item) => (
              <li className={`works_item ${item.className}`}>
                <div className="works_imgWrapper">
                  <img src={item.img} width={item.width} height={item.height} alt="Работа выпускника" />
                </div>
              </li>
            ))}
          </ul>
          <Button
            className="button--white"
            text="Посмотреть ещё"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};
