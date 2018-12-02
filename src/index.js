import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';

import App from 'pages/App';
import 'index.css';

import io from 'socket.io-client';
import { socketConnect } from 'modules/socket/creators';

store.dispatch(socketConnect(io('localhost:8080')));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
