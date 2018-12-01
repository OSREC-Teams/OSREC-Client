import axios from 'axios';

import URL_API from '../api';

import {
  chatroomsCreateRequest,
  chatroomsCreateFailure,
  chatroomsCreateSuccess,
} from './creators';

export const createChatroom = chatroom => dispatch =>
  new Promise((resolve, reject) => {
    const axiosConfig = {
      headers: { 'Content-Type': 'application/json' },
    };

    dispatch(chatroomsCreateRequest());
    axios
      .post(`${URL_API}/chatrooms`, chatroom, axiosConfig)
      .then(() => {
        dispatch(chatroomsCreateSuccess());
        resolve();
      })
      .catch(e => {
        dispatch(chatroomsCreateFailure(e));
        reject();
      });
  });

export default createChatroom;
