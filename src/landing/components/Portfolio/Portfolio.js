import React, { useState } from 'react';
import {
  PORTFOLIO_LIST,
  INITIAL_SHOW_COUNT,
  ITERATION_SHOW_COUNT,
} from './Portfolio.constans';
import { Button } from '../Button/Button';
import { Decor } from './assets/Decor';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import './Portfolio.style.scss';

export const Portfolio = () => {
  const [portfolioLength, setPortfolioLength] = useState(INITIAL_SHOW_COUNT);

  const showMoreHanlder = () => {
    setPortfolioLength((prev) => prev + ITERATION_SHOW_COUNT);
  };

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio_wrapper">
          <div className="portfolio_decor">
            <Decor />
          </div>
          <h2 className="portfolio_title">
            Портфолио учеников на&nbsp;Behance
          </h2>
          <PhotoProvider>
            <div className="portfolio_list">
              {PORTFOLIO_LIST.slice(0, portfolioLength).map((item, index) => (
                <div className="portfolio_item" key={index}>
                  <div className="portfolio_student">
                    <img
                      className=""
                      src={item.avatar}
                      alt={item.name}
                      width={88}
                      height={88}
                    />
                    <p className="portfolio_studentName">{item.name}</p>
                  </div>
                  <PhotoView src={item.portfolio}>
                    <img
                      className="portfolio_workImg"
                      src={item.portfolio}
                      alt="Портфолио"
                      width={320}
                      height={931}
                    />
                  </PhotoView>
                </div>
              ))}
            </div>
          </PhotoProvider>
          {portfolioLength < PORTFOLIO_LIST.length && (
            <Button
              text="Посмотреть ещё"
              tupe="button"
              className="button--border"
              onClick={showMoreHanlder}
            />
          )}
        </div>
      </div>
    </section>
  );
};
