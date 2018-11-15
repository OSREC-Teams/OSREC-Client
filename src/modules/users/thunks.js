import axios from 'axios';

import URL_API from '../api';

import {
  usersCreateRequest,
  usersCreateFailure,
  usersCreateSuccess,
} from './creators';

export const createUser = user => dispatch =>
  new Promise((resolve, reject) => {
    const axiosConfig = {
      headers: { 'Content-Type': 'application/json' },
    };

    dispatch(usersCreateRequest());
    axios
      .post(`${URL_API}/users`, user, axiosConfig)
      .then(() => {
        dispatch(usersCreateSuccess());
        resolve();
      })
      .catch(e => {
        dispatch(usersCreateFailure(e));
        reject();
      });
  });

export default createUser;
