import React from 'react';
import { Header, Footer } from './components';

import './Landing.styles.scss';
import './Container.styles.scss';
import './Mixins.styles.scss';

export const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Footer />
    </div>
  );
};
