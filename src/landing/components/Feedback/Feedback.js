import React from 'react';
// import { FEEDBACK_IMAGES} from './Feedback.images';
import './Feedback.style.scss';

export const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback_wrapper">
          <h2 className="feedback_title">
            Самая важная часть &mdash;&nbsp;обратная связь
          </h2>
          <div className="feedback_text">
            <p>
              Наглядно объясняем, как улучшить вашу работу со схемой строения
              предмета, постановкой света и с цветовой гаммой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
