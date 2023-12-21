import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ONLINE_PLATFORM_SLIDER_DATA } from './OnlinePlatform.constants';

import './OnlinePlatform.style.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

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
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={12}
        slidesOffsetBefore={10}
        slidesOffsetAfter={10}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        className="onlinePlatform_slider"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {ONLINE_PLATFORM_SLIDER_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="onlinePlatform_sliderItem">
              <img src={item.img} />
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
