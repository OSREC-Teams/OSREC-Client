/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function getStore(initialState) {
  return createStore(
    () => {},
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
