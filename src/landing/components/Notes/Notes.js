import React from 'react';
import { Notebook } from './assets/Notebook';
import { Cat } from './assets/Cat';

import './Notes.style.scss';

export const Notes = () => {
  return (
    <section className="notes">
      <div className="container">
        <div className="notes_wrapper">
          <div className="notes_image">
            <Notebook />
          </div>
          <div className="notes_cat">
            <Cat />
          </div>
        </div>
      </div>
    </section>
  );
};
