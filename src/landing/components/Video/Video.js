import React, { useState, useRef } from 'react';
import { IconPlay } from './assets/IconPlay';

import './Video.style.scss';

export const Video = ({ width, height, src, title, poster, type }) => {
  const videoRef = useRef(null);
  const [playBtnVisible, setPlayBtnVisible] = useState(true);

  const handlerPlayVideo = () => {
    videoRef.current.play();
    videoRef.current.controls = true;
    setPlayBtnVisible(false);
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        type={type}
      />
      {playBtnVisible && (
        <button
          onClick={handlerPlayVideo}
          className="video_btnPlay"
          type="button"
        >
          <IconPlay />
        </button>
      )}
    </div>
  );
};
