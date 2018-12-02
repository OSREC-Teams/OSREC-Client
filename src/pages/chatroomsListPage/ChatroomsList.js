import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchChatrooms } from 'modules/chatrooms/thunks';

import ChatroomLink from './ChatroomLink';
import { ListWrapper, ListBody } from './ListWrapper';
import ListElem from './ListElem';

class ChatroomsList extends React.Component {
  componentDidMount() {
    const { fetchAllChatrooms } = this.props;

    fetchAllChatrooms();
  }

  render() {
    const { chatrooms } = this.props;

    return (
      <ListWrapper>
        <ListBody>
          {chatrooms.map(room => (
            <ListElem>
              <ChatroomLink to={`/c/${room.name}`}>{room.name}</ChatroomLink>
            </ListElem>
          ))}
        </ListBody>
      </ListWrapper>
    );
  }
}

ChatroomsList.propTypes = {
  fetchStatus: PropTypes.shape({
    succeeded: PropTypes.bool,
    failed: PropTypes.bool,
    failedError: PropTypes.shape({ message: PropTypes.string }).isRequired,
  }).isRequired,
  chatrooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      descriptuon: PropTypes.string,
    }),
  ).isRequired,
  fetchAllChatrooms: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  chatrooms: Object.values(state.chatrooms),
  fetchStatus: state.chatroomsProperties.fetch,
});

const mapDispatchToProps = dispatch => ({
  fetchAllChatrooms: () => dispatch(fetchChatrooms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomsList);
