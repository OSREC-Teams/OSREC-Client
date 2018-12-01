import {
  CHATROOMS_CREATE_REQUEST,
  CHATROOMS_CREATE_FAILURE,
  CHATROOMS_CREATE_SUCCESS,
} from './types';

export const chatroomsCreateRequest = () => ({
  type: CHATROOMS_CREATE_REQUEST,
});

export const chatroomsCreateFailure = error => ({
  type: CHATROOMS_CREATE_FAILURE,
  error,
});

export const chatroomsCreateSuccess = () => ({
  type: CHATROOMS_CREATE_SUCCESS,
});
