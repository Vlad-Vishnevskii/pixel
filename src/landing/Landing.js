import React from 'react';
import './Landing.styles.scss';
import {
  Header,
  Footer,
  Form,
  AboutSchool,
  Faq,
  Price,
  Review,
  Portfolio,
  Result,
} from './components';
import { REVIEW_IMAGES } from './components/Review/Review.images';

export const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Result />
      <Portfolio />
      <Review
        className="review--dark"
        nameStudent="Виктория Пивкина"
        src={REVIEW_IMAGES.STUDENT5}
        text="На&nbsp;курсе мне больше всего понравились конспекты лекций по&nbsp;теории рисунка, видимо это самое важное, чего мне не&nbsp;хватало для качественного выполнения работ. Часть денег (за&nbsp;курс) мне уже удалось вернуть, продав несколько своих работ."
        works={[
          {
            id: 0,
            src: REVIEW_IMAGES.WORK4,
          },
          {
            id: 2,
            src: REVIEW_IMAGES.WORK5,
          },
          {
            id: 3,
            src: REVIEW_IMAGES.WORK6,
          },
        ]}
      />
      <Price />

      <section className="section section--orange">
        <div className="container">
          <Form />
        </div>
      </section>

      <AboutSchool />
      <Faq />
      <section className="section section--dark">
        <div className="container">
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
};
