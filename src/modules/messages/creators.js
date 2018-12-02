import { MESSAGE_ADD } from './types';

export const messageAdd = (room, message) => ({
  type: MESSAGE_ADD,
  room,
  message,
});

export default messageAdd;
