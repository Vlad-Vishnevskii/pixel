import React from 'react';
// import { ONLINE_PLATFORM_IMAGES} from './OnlinePlatform.images';
import './OnlinePlatform.style.scss';

export const OnlinePlatform = () => {
  return (
    <section className="onlinePlatform">
      <div className="container">
        <div className="onlinePlatform_wrapper">
          <h2 className="onlinePlatform_title">
            Онлайн платформа для&nbsp;комфортного обучения
          </h2>
          <div className="onlinePlatform_text">
            <p>
              Смотрите видео уроки в своем темпе и сдавайте домашние работы на
              удобной платформе.
            </p>
          </div>
          <p className="onlinePlatform_info">
            Доступ к урокам остается навсегда!
          </p>
        </div>
      </div>
    </section>
  );
};
