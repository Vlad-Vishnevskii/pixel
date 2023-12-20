import React from 'react';
import './Works.style.scss';
import { Button } from './../Button/Button';

export const Works = () => {
  return (
    <section className="works">
      <div className="container">
        <div className="works_wrapper">
          <div className="works_decor"></div>
          <h2 className="works_title">Работы выпускников</h2>
          <div className="works_list">

          </div>
          <Button className="button--white" text="Посмотреть ещё" type="button" />
        </div>
      </div>
    </section>
  );
};
