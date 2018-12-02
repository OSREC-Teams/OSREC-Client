/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { sendMessage as sendMessageThunk } from 'modules/messages/thunks';
import { messageAdd } from 'modules/messages/creators';
import { fetchChatroom } from 'modules/chatrooms/thunks';

import InputBar from 'pages/chatroomPage/InputBar';
import MessagesList from 'pages/chatroomPage/MessagesList';

const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  padding: 20px;
  background-color: #666666;
  width: 80%;
  min-width: 215px;
  height: 80%;
  max-height: 700px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

class ChatroomPage extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { room },
      },
      getRoom,
      fetchRoom,
      socket,
    } = this.props;

    if (getRoom(room) === undefined) {
      fetchRoom(room);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: { room },
      },
      socket,
      receiveMessage,
    } = this.props;

    if (nextProps.socket.emit !== undefined && socket.emit === undefined) {
      nextProps.socket.emit('room_join', room);
      nextProps.socket.on('message_receive', (room, message) => {
        receiveMessage(room, message);
      });
    }
  }

  componentWillUnmount() {
    const {
      match: {
        params: { room },
      },
      socket,
    } = this.props;

    socket.emit('room_quit', room);
  }

  onMessageSending(body) {
    const {
      socket,
      match: {
        params: { room },
      },
      sendMessage,
    } = this.props;

    sendMessage(socket, room, {
      body,
    });
  }

  render() {
    const {
      match: {
        params: { room },
      },
      getRoom,
      socket,
    } = this.props;

    if (getRoom(room) === undefined) {
      return <p>Loading</p>;
    }
    return (
      <Page>
        <Wrapper>
          <MessagesList messages={getRoom(room).messages} />
          <InputBar onSubmit={body => this.onMessageSending(body)} />
        </Wrapper>
      </Page>
    );
  }
}

ChatroomPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
  socket: PropTypes.shape({}).isRequired,
  sendMessage: PropTypes.func.isRequired,
  getRoom: PropTypes.func.isRequired,
  fetchRoom: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
  getRoom: room => state.chatrooms[room],
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (socket, room, message) =>
    dispatch(sendMessageThunk(socket, room, message)),
  fetchRoom: room => dispatch(fetchChatroom(room)),
  receiveMessage: (room, message) => dispatch(messageAdd(room, message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomPage);
