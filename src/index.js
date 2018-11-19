import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import initTranslate from 'utils/initTranslate';

import getStore from 'store';

import App from 'pages/App';
import 'index.css';

// TODO: Send redux locale as parameters
initTranslate();

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
