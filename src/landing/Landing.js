import React from 'react';
import './Landing.styles.scss';
import './Mixins.styles.scss';  // ?
import './Container.styles.scss';
import './Section.styles.scss';
import { Header, Footer, Form, AboutSchool } from './components';


export const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <AboutSchool/>
      <section className="section section--dark">
        <div className="container">
          <Form/>
        </div>
      </section>
      <Footer />
    </div>
  );
};
