import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 80%;
  overflow-y: auto;
  background-color: #9f9f9f;
  border-radius: 0.25rem;
  padding: 10px;
`;
const Message = styled.li`
  list-style-type: none;
  padding: 5px;
  margin: 5px;
  background-color: #c0c0c0;
  border-radius: 0.7rem;
  width: 100%;
`;

class MessagesList extends React.Component {
  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messages } = this.props;
    return (
      <Ul>
        {messages.map(message => (
          <Message>{message.body}</Message>
        ))}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </Ul>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
    }),
  ).isRequired,
};

export default MessagesList;
