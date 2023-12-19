import React from 'react';
import { IconPlay } from './assets/IconPlay';

import './Video.style.scss';

export const Video = ({ width, height, src, title, poster, type }) => {
  return (
    <div className="video">
      <video src={src} poster={poster} width={width} height={height} type={type}></video>
      <button className="video_btnPlay" type="button">
        <IconPlay />
      </button>
    </div>
  );
};
