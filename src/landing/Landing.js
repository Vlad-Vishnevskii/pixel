import React from 'react';
import './Landing.styles.scss';
import './Mixins.styles.scss';  // ?
import './Container.styles.scss';
import './Section.styles.scss';
import { Header, Footer, Form } from './components';


export const Landing = () => {
  return (
    <div className="landing">
      <Header />

        <section className="section section--dark">
          <div className="container">
            <Form/>
          </div>
        </section>
      <Footer />
    </div>
  );
};
