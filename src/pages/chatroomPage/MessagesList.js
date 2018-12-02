import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  width: 90%;
  height: 80%;
  overflow-y: auto;
`;
const Message = styled.li`
  text-decoration: none;
`;

const MessagesList = ({ messages }) => (
  <Ul>
    {messages.map(message => (
      <Message>{message.body}</Message>
    ))}
  </Ul>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
    }),
  ).isRequired,
};

export default MessagesList;
