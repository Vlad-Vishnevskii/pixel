import React from 'react';
import { ABOUT_SCHOOL_TEXT_CONTENT } from './AboutSchool.constans';

import './AboutSchool.style.scss';

export const AboutSchool = () => {
  return (
    <section className="aboutSchool">
      <div className="container">
        <h2 className="aboutSchool_title">О ШКОЛЕ</h2>
        <ul className="aboutSchool_list">
          {ABOUT_SCHOOL_TEXT_CONTENT.map((item) => (
            <li className="aboutSchool_item" key={item.id}>
              <p className="aboutSchool_numbers">{item.title}</p>
              <p className="aboutSchool_text">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
