/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './modules/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authProperties'],
};

export const store = createStore(
  persistReducer(persistConfig, reducers),
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;
