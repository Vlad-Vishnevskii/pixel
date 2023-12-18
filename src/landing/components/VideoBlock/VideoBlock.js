import React from 'react';
import { Video } from '../Video/Video';

import './VideoBlock.style.scss';

export const VideoBlock = () => {
  return (
    <section className="videoBlock">
      <div className="container">
        <h2 className="videoBlock_title">
          Все работы разбираются онлайн на&nbsp;видео эфире
        </h2>
        <div className="videoBlock_blockTop">
          <p className="videoBlock_text">
            Кратно усиливайте свои скиллы и&nbsp;насмотренность, изучая удачные
            и&nbsp;неудачные решения в&nbsp;работах одногруппников.
          </p>
          <Video
            width={320}
            height={188}
            src="https://www.youtube.com/embed/ScMzIvxBSi4?si=E79c-iQDCSD4Z3TM"
            title="YouTube video player"
          />
          <p className="videoBlock_text">
            Показываем как&nbsp;вносить все&nbsp;правки и&nbsp;анализируем
            результат до/после.
          </p>
        </div>
        <div className="videoBlock_blockBottom">
          <h2 className="videoBlock_title">
            Никаких проверок по&nbsp;трафарету
          </h2>
          <p className="videoBlock_text">
            Преподаватель погружается в&nbsp;каждую работу, учитывая вашу
            стилистику иллюстрации, референсы и&nbsp;запрос.
          </p>
        </div>
      </div>
    </section>
  );
};
