import React, { useState } from 'react';
import cn from 'classnames';
import { FEEDBACK_IMAGES } from './Feedback.constants';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import { CurtainArrow } from './aseets/CurtainArrow';

import './Feedback.style.scss';

export const Feedback = () => {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const nextBtnHandler = () => {
    if (animate) {
      setAnimate(false);
    }

    if (activeWorkIndex === FEEDBACK_IMAGES.length - 1) {
      setTimeout(() => {
        setAnimate(true);
        setActiveWorkIndex(0);
      }, 300);
    } else {
      setTimeout(() => {
        setAnimate(true);
        setActiveWorkIndex(activeWorkIndex + 1);
      }, 300);
    }
  };

  const prevBtnHandler = () => {
    if (animate) {
      setAnimate(false);
    }

    if (activeWorkIndex === 0) {
      setTimeout(() => {
        setAnimate(true);
        setActiveWorkIndex(FEEDBACK_IMAGES.length - 1);
      }, 300);
    } else {
      setTimeout(() => {
        setAnimate(true);
        setActiveWorkIndex(activeWorkIndex - 1);
      }, 300);
    }
  };

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
        <div className="feedback_curtain">
          <div
            className={cn('feedback_curtainWrapper', {
              [`animateElement`]: animate,
            })}
          >
            <ReactBeforeSliderComponent
              firstImage={FEEDBACK_IMAGES[activeWorkIndex].img2}
              secondImage={FEEDBACK_IMAGES[activeWorkIndex].img1}
              withResizeFeel={false}
              delimiterColor="#EDEDED"
            />
          </div>
          <div className="feedback_curtainBottom">
            <button
              type="button"
              onClick={prevBtnHandler}
              className="feedback_curtainArrow feedback_curtainArrow_left"
            >
              <CurtainArrow />
            </button>
            <span
              className={cn('feedback_curtainName', {
                [`animateElement`]: animate,
              })}
            >
              {FEEDBACK_IMAGES[activeWorkIndex].name}
            </span>
            <button
              onClick={nextBtnHandler}
              className="feedback_curtainArrow feedback_curtainArrow_right"
            >
              <CurtainArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
