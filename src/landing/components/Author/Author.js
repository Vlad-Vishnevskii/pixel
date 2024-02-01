import React from 'react';
import './Author.style.scss';
import { Star } from '../Icons/Star';
import { Star2 } from '../Icons/Star2';
import { AUTHOR_IMAGES } from './Author.images';
import { Microphone } from './assets/Microphone';
import { NameAuthor } from './assets/NameAuthor';
import { Video } from '../Video/Video';
import { AUTHOR_DATA } from './Author.constants';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { getAssetsPath } from '../../helpers';

export const Author = () => {
  return (
    <section className="author">
      <div className="container">
        <div className="author_wrapper">
          <h2 className="author_title">Автор курса</h2>

          <div className="author_greetings">
            <div className="author_greetingsWrapper">
              <p className="author_greetingsTitle">Hello</p>
              <p className="author_greetingsText">my name is</p>
              <div className="author_photo">
                <img
                  src={AUTHOR_IMAGES.PHOTO}
                  width={83}
                  height={104}
                  alt="Яна Суворова"
                />
                <div className="author_iconStar2">
                  <Star2 />
                </div>
              </div>
              <div className="author_iconName">
                <NameAuthor />
              </div>
              <div className="author_iconMicrophone">
                <Microphone />
              </div>
            </div>
          </div>

          <div className="author_listWrapper">
            <ul className="author_list">
              <li className="author_item">
                Яна Суворова лично ведет обучение и&nbsp;разбирает домашние
                задания учеников.
              </li>
              <li className="author_item">
                Нет меняющихся кураторов&nbsp;&mdash; у&nbsp;преподавателя
                сохраняется контекст вашей работы.
              </li>
              <li className="author_item">
                Обратная связь по&nbsp;домашним заданиям студентов
                на&nbsp;онлайн разборе 2&nbsp;раза в&nbsp;неделю.
              </li>
            </ul>

            <div className="author_iconStar">
              <Star />
            </div>
          </div>

          <Video
            width={320}
            height={188}
            src="./video/acquaintance.mp4"
            poster={getAssetsPath('/images/landingContent/author/poster.png')}
            type="video/mp4"
          />

          <PhotoProvider>
            <ul className="author_listImage">
              {AUTHOR_DATA.map((item, index) => (
                <li className="author_itemImage" key={index}>
                  <PhotoView src={item.img}>
                    <img
                      src={item.img}
                      width={item.width}
                      height={item.height}
                      alt="Работа"
                    />
                  </PhotoView>
                </li>
              ))}
            </ul>
          </PhotoProvider>
        </div>
      </div>
    </section>
  );
};
