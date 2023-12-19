import React from 'react';
import { PORTFOLIO_IMAGES } from './Portfolio.images';
import { Button } from '../Button/Button';
import { Decor } from './assets/Decor';

import './Portfolio.style.scss';

export const Portfolio = () => {
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
          <div className="portfolio_student">
            <img
              className=""
              src={PORTFOLIO_IMAGES.STUDENT}
              alt="Яна Гусева"
              width={88}
              height={88}
            />
            <p className="portfolio_studentName">Яна Гусева</p>
          </div>
          <img
            className="portfolio_workImg"
            src={PORTFOLIO_IMAGES.PORTFOLIO1}
            alt="Портфолио"
            width={320}
            height={931}
          />
          <Button
            text="Посмотреть ещё"
            tupe="button"
            className="button--border"
          />
        </div>
      </div>
    </section>
  );
};
