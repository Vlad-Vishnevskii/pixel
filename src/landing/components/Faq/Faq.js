import React from 'react';
import { AccordionFaq } from './AccordionFaq';

import './Faq.style.scss';

export const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq_title">Часто задаваемые вопросы</h2>
        <AccordionFaq />
      </div>
    </section>
  );
};
