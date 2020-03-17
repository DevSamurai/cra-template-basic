import React from 'react';

import { Normalize } from 'styled-normalize';

import Routes from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <Routes />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
