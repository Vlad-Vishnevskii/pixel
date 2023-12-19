import React from 'react';
import { Cat } from './assets/Cat';
import { useSchoolTextContent } from './useSchoolTextContent';

import './AboutSchool.style.scss';

export const AboutSchool = () => {
  const schoolTextContent = useSchoolTextContent();

  return (
    <section className="aboutSchool">
      <div className="container">
        <h2 className="aboutSchool_title">О ШКОЛЕ</h2>
        <div className="aboutSchool_listWrapper">
          <div className="aboutSchool_cat">
            <Cat />
          </div>
          <ul className="aboutSchool_list">
            {schoolTextContent.map((item) => (
              <li className="aboutSchool_item" key={item.id}>
                <p className="aboutSchool_numbers">{item.title}</p>
                <p className="aboutSchool_text">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
