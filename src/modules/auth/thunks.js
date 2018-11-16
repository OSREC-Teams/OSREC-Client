import axios from 'axios';

import URL_API from '../api';

import {
  authCreateRequest,
  authCreateFailure,
  authCreateSuccess,
} from './creators';

export const login = credentials => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(authCreateRequest());
    axios
      .post(`${URL_API}/auth`, credentials, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => {
        dispatch(authCreateSuccess(res.data.token));
        resolve();
      })
      .catch(e => {
        dispatch(authCreateFailure(e));
        reject();
      });
  });

export default login;
