import React from 'react';
import { IconCat } from './assets/IconCat';
import { NOT_ALONE_IMAGES } from './NotAlone.images';

import './NotAlone.style.scss';

export const NotAlone = () => {
  return (
    <section className="notAlone">
      <div className="container">
        <div className="notAlone_wrapper">
          <div className="notAlone_icon">
            <IconCat />
          </div>
          <h2 className="notAlone_title"> Вы&nbsp;не&nbsp;одни</h2>
          <p className="notAlone_text">
            С&nbsp;вами в&nbsp;вашем путешествии не&nbsp;только преподаватель,
            но&nbsp;и&nbsp;сокурсники&nbsp;&mdash; общайтесь, делитесь работами
            и&nbsp;обратной связью в&nbsp;закрытом канале Дискорда.
          </p>
          <div className="notAlone_image">
            <img
              src={NOT_ALONE_IMAGES.CHAT}
              alt="Чат"
              width={320}
              height={208}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
