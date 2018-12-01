import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchChatrooms } from 'modules/chatrooms/thunks';

class ChatroomsList extends React.Components {
  componentDidMount() {
    this.props.fetchChatrooms();
  }

  render() {
    const { chatrooms } = this.props;
    const list = Object.values(chatrooms).map(room => <div>{room.name}</div>);
    return list;
  }
}

ChatroomsList.propTypes = {
  fetchStatus: PropTypes.shape({}).isRequired,
  chatrooms: PropTypes.shape({}).isRequired,
  fetchChatrooms: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  chatrooms: state.chatrooms,
  fetchStatus: state.chatroomsProperties.fetch,
});

const mapDispatchToProps = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomsList);
