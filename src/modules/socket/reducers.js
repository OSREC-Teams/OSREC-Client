import { SOCKET_CONNECT } from './types';

export default (state = {}, action) => {
  if (action.type === SOCKET_CONNECT) {
    return action.socket;
  }
  return state;
};
