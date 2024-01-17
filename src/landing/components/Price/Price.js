import React from 'react';
import { Cat } from './assets/Cat';
import { usePriceTextContent } from './usePriceTextContent';

import './Price.style.scss';

export const Price = () => {
  const priceTextContent = usePriceTextContent();

  return (
    <section className="price">
      <div className="container">
        <div className="price_titleWrapper">
          <div className="price_cat">
            <Cat />
          </div>
          <h2 className="price_title">Стоимость курса</h2>
          <p className="price_titlePrice">24&nbsp;900&nbsp;₽</p>
        </div>
        <div className="price_installment">
          <p className="price_installmentTitle">Или рассрочка на&nbsp;год</p>
          <p className="price_installmentPrice">2&nbsp;850&nbsp;₽/&nbsp;мес</p>
        </div>
        <ul className="price_list">
          {priceTextContent.map((item) => (
            <li className="price_item" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
