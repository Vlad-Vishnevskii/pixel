import React from 'react';
import { PORTFOLIO_IMAGES } from './Portfolio.images';
import { Button } from '../Button/Button';

import './Portfolio.style.scss';

export const Portfolio = ({ className, nameStudent, src, text, works }) => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio_wrapper">
          <h2 className="portfolio_title">Портфолио учеников на&nbsp;Behance</h2>
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
