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
  NotAlone,
  VideoBlock,
} from './components';
import { REVIEW_IMAGES } from './components/Review/Review.images';
// import { useReviewTextContent } from './useReviewTextContent';

export const Landing = () => {
  // const reviewTextContent = useReviewTextContent();

  return (
    <div className="landing">
      <Header />
      <Review
        className="review--orange review--stars"
        nameStudent="Яна Гусева"
        src={REVIEW_IMAGES.STUDENT2}
        texts={[
          {
            id: 0,
            text: (
              <>
                Ранее я&nbsp;проходила ни&nbsp;один курс в&nbsp;других школах,
                но&nbsp;этот дал столько знаний, сколько я&nbsp;не&nbsp;получила
                за&nbsp;6&nbsp;лет в&nbsp;универе!
              </>
            ),
          },
          {
            id: 1,
            text: (
              <>
                Еще во&nbsp;время учебы у&nbsp;меня появилось 2&nbsp;клиента,
                где я&nbsp;задействовала навыки рисования в&nbsp;иллюстраторе.
                Это очень порадовало меня!
              </>
            ),
          },
        ]}
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
      <VideoBlock />
      <Review
        nameStudent="Ольга Ерж"
        src={REVIEW_IMAGES.STUDENT3}
        texts={[
          {
            id: 0,
            text: (
              <>
                Я&nbsp;человек технической специальности. Преподаватели
                абсолютно четко оговаривают неточности и&nbsp;делают
                из&nbsp;твоей иллюстрации какое-то волшебство.
              </>
            ),
          },
        ]}
        works={[
          {
            id: 0,
            src: REVIEW_IMAGES.WORK7,
          },
          {
            id: 2,
            src: REVIEW_IMAGES.WORK8,
          },
          {
            id: 3,
            src: REVIEW_IMAGES.WORK9,
          },
        ]}
      />

      <section className="section section--gradient-blue section--padding-s">
        <div className="container">
          <Form />
        </div>
      </section>

      <NotAlone />
      <Review
        className="review--light-blue"
        nameStudent="Яна Корнишина"
        src={REVIEW_IMAGES.STUDENT4}
        texts={[
          {
            id: 0,
            text: (
              <>
                Лучшее&nbsp;&mdash; это разборы и&nbsp;чат в&nbsp;Discord.
                Преподаватель понятно и&nbsp;лаконично объясняет, при этом
                атмосфера дружелюбная и&nbsp;мотивирует совершенствоваться.
                Очень интересно смотреть работы других учеников.
              </>
            ),
          },
        ]}
        works={[
          {
            id: 0,
            src: REVIEW_IMAGES.WORK10,
          },
          {
            id: 2,
            src: REVIEW_IMAGES.WORK11,
          },
          {
            id: 3,
            src: REVIEW_IMAGES.WORK12,
          },
        ]}
      />
      <Result />
      <Portfolio />
      <Review
        className="review--dark"
        nameStudent="Виктория Пивкина"
        src={REVIEW_IMAGES.STUDENT5}
        texts={[
          {
            id: 0,
            text: (
              <>
                На&nbsp;курсе мне больше всего понравились конспекты лекций
                по&nbsp;теории рисунка, видимо это самое важное, чего мне
                не&nbsp;хватало для качественного выполнения работ. Часть денег
                (за&nbsp;курс) мне уже удалось вернуть, продав несколько своих
                работ.
              </>
            ),
          },
        ]}
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
