import React from 'react';
import './InfoBlock.style.scss';
import { Decor } from './assets/Decor';
import { Image } from './assets/Image';

export const InfoBlock = () => {
  return (
    <section className="infoBlock">
      <div className="container">
        <div className="infoBlock_wrapper">
          <div className="infoBlock_decor">
            <Decor />
          </div>
          <h2 className="infoBlock_title">
            Курс для&nbsp;новичков и опытных художников
          </h2>
          <div className="infoBlock_text">
            <p>
              Только погружаетесь в&nbsp;сферу иллюстрации? Уже рисуете,
              но&nbsp;хотите развиваться с&nbsp;поддержкой опытного
              иллюстратора? Этот курс для вас.
            </p>
            <p>
              Обучение подойдет иллюстраторам разных уровней, так как включает
              в&nbsp;себя актуальные инструменты Adobe Illustrator, уроки
              по&nbsp;иконкам, персонажам и&nbsp;паттернам.
            </p>
          </div>
          <div className="infoBlock_image">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
};
