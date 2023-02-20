import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';

import GlobalStyles from './styled/GlobalStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
    <GlobalStyles />
  </React.StrictMode>
);

