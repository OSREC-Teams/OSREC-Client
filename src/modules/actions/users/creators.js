import {
  USERS_CREATE_REQUEST,
  USERS_CREATE_FAILURE,
  USERS_CREATE_SUCCESS,
} from './types';

export const usersCreateRequest = () => ({
  type: USERS_CREATE_REQUEST,
});

export const usersCreateFailure = error => ({
  type: USERS_CREATE_FAILURE,
  error,
});

export const usersCreateSuccess = () => ({
  type: USERS_CREATE_SUCCESS,
});
