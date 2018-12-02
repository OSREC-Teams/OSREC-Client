import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// class ChatroomPage extends React.Component {
//   componentDidMount()
// }

const ChatroomPage = ({ match, socket }) => (
  <p style={{ marginTop: '40px' }}>
    {match.params.room}
    {socket.id}
  </p>
);

ChatroomPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.string }).isRequired,
  socket: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  socket: state.socket,
});

export default connect(mapStateToProps)(ChatroomPage);
