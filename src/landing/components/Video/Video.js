import React from 'react';

import './Video.style.scss';

export const Video = ({ width, height, src, title }) => {
  return (
    <div className="video">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
