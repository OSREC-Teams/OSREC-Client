import { messageAdd } from './creators';

export const sendMessage = (socket, room, message) => dispatch => {
  dispatch(messageAdd(room, message));
  socket.emit('message_send', room, message);
};

export default sendMessage;
