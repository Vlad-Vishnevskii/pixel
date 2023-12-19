import React from 'react';
import './Checked.style.scss';

export const Checked = () => {
  return (
    <section className="checked">
      <div className="container">
        <div className="checked_wrapper">
          <div className="checked_titleWrapper">
            <h2 className="checked_title">
              Курс, проверенный 2627 выпусниками
            </h2>
          </div>
          <ul className="checked_list">
            <li className="checked_item">
              Мы&nbsp;регулярно собираем обратную связь от&nbsp;студентов
              и&nbsp;улучшаем курс.
            </li>
            <li className="checked_item">
              По&nbsp;обратной связи и&nbsp;статистике мы&nbsp;знаем, где чаще
              всего возникают проблемы. Преподаем так, чтобы
              вы&nbsp;не&nbsp;забрасывали обучение и&nbsp;получали удовольствие
              и&nbsp;навыки.
            </li>
            <li className="checked_item">
              К&nbsp;каждому домашнему заданию мы&nbsp;прикладываем заметку
              о&nbsp;частых ошибках, чтобы вы&nbsp;учились на&nbsp;ошибках
              других студентов и&nbsp;экономили свое время.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
