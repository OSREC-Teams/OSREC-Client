import {
  AUTH_CREATE_REQUEST,
  AUTH_CREATE_FAILURE,
  AUTH_CREATE_SUCCESS,
} from './types';

export const authCreateRequest = () => ({
  type: AUTH_CREATE_REQUEST,
});

export const authCreateFailure = error => ({
  type: AUTH_CREATE_FAILURE,
  error,
});

export const authCreateSuccess = () => ({
  type: AUTH_CREATE_SUCCESS,
});
