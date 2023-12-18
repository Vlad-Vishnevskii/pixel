import React from 'react';
// import { PRICE_TEXT_CONTENT } from './Price.constans';

import './Price.style.scss';

export const Price = () => {
  return (
    <section className="price">
      <div className="container">
        <div className="price_titleWrapper">
          <h2 className="price_title">Стоимость курса</h2>
          <p className="price_titlePrice">36&nbsp;700&nbsp;₽</p>
        </div>
        <div className="price_installment">
          <p className="price_installmentTitle">Или рассрочка на&nbsp;год</p>
          <p className="price_installmentPrice">3&nbsp;300&nbsp;₽/&nbsp;мес</p>
        </div>
        <ul className="price_list">
          {/* {PRICE_TEXT_CONTENT.map((item) => (
            <li className="price_item" key={item.id}>{item.text}</li>
          ))} */}
          <li className="price_item">Доступ к&nbsp;видео урокам навсегда.</li>
          <li className="price_item">Консультация с&nbsp;преподавателем включена на&nbsp;4&nbsp;месяца.</li>
          <li className="price_item">Консультации можно продлевать.</li>
        </ul>
      </div>
    </section>
  );
};
