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
  Illustrations,
  Notes,
  OnlinePlatform,
  Checked,
  Principles,
  Program,
  Feedback,
  InfoBlock,
} from './components';
import { useReviewTextContent } from './useReviewTextContent';

export const Landing = () => {
  const reviewTextContent = useReviewTextContent();
  const [student1, student2, student3, student4, student5] = reviewTextContent;

  return (
    <div className="landing">
      <Header />
      <Illustrations />
      <Principles />
      <Program />
      <InfoBlock />
      <Feedback />
      <Review className="review--gradient-blue" {...student1} />
      <Checked />
      <OnlinePlatform />
      <Notes />
      <Review className="review--orange review--stars" {...student2} />
      <VideoBlock />
      <Review {...student3} />

      <section className="section section--gradient-blue section--padding-s">
        <div className="container">
          <Form />
        </div>
      </section>

      <NotAlone />
      <Review className="review--light-blue" {...student4} />
      <Result />
      <Portfolio />
      <Review className="review--dark" {...student5} />
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
