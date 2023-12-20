import React from 'react';
import { CAT_PROGRAM } from './Program.images';
import { AccordionList } from './AccordionList';
import './Program.styles.scss';

export const Program = () => {
  return (
    <div className="program container section">
      <img className="program_cat" src={CAT_PROGRAM} alt="" />
      <h2 className="program_title">Программа</h2>
      <AccordionList />
    </div>
  );
};
