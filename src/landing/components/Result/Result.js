import React from 'react';
import { useResultTextContent } from './useSchoolTextContent';
// import { Button } from '../Button/Button';

import './Result.style.scss';

export const Result = () => {
  const resultTextContent = useResultTextContent();

  return (
    <section className="result">
      <div className="container">
        <div className="result_wrapper">
          <h2 className="result_title">
            Упор на&nbsp;подготовку к&nbsp;реальной работе
          </h2>
          <p className="result_text">
            Помогаем вам оформить портфолио и&nbsp;подготовиться к&nbsp;первым
            интервью.
          </p>
          <div className="result_listWrapper">
            <p className="result_listTitle">На нашем курсе:</p>
            <ul className="result_list">
              {resultTextContent.map((item) => (
                <li className="result_item" key={item.id}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
