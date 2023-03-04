import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = (): JSX.Element => {
  return (
    <Page>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Page>
  );
};

export default App;
