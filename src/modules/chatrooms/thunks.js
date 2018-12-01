import axios from 'axios';

import URL_API from '../api';

import {
  chatroomsCreateRequest,
  chatroomsCreateFailure,
  chatroomsCreateSuccess,
  chatroomsFetchRequest,
  chatroomsFetchFailure,
  chatroomsFetchSuccess,
} from './creators';

export const getChatrooms = () => dispatch =>
  new Promise((resolve, reject) => {
    const axiosConfig = {
      headers: { 'Content-Type': 'application/json' },
    };

    dispatch(chatroomsFetchRequest());
    axios
      .get(`${URL_API}/chatrooms`, axiosConfig)
      .then(data => {
        console.log(data);
        dispatch(chatroomsFetchSuccess(data));
        resolve();
      })
      .catch(e => {
        dispatch(chatroomsFetchFailure(e));
        reject();
      });
  });

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
