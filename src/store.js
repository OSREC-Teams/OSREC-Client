/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './modules/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function getStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
