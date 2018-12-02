import { SOCKET_CONNECT } from './types';

export const socketConnect = socket => ({
  type: SOCKET_CONNECT,
  socket,
});

export default socketConnect;
