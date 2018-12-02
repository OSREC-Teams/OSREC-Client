import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import io from 'socket.io-client';
import { socketConnect } from 'modules/socket/creators';
import API_URL from 'modules/api';
import { init } from 'utils/translate';

import LandingPage from 'pages/LandingPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ChatroomsCreatePage from 'pages/ChatroomsCreatePage';
import ChatroomsListPage from 'pages/ChatroomsListPage';
import ChatroomPage from 'pages/ChatroomPage';
import Menu from 'components/Menu';

const ProtectedRouter = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <Menu />
        <Switch>
          <Redirect from="/login" to="/" />
          <Route exact path="/" component={ChatroomsListPage} />
          <Route
            exact
            path="/chatrooms/create"
            component={ChatroomsCreatePage}
          />
          <Route path="/c/:room" component={ChatroomPage} />
          <Route renders={<p style={{ color: 'white' }}>Not Found</p>} />
        </Switch>
      </React.Fragment>
    </Router>
  </React.Fragment>
);

const GuestRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export class App extends React.Component {
  componentDidMount() {
    const { connectToSocket } = this.props;
    Promise.all([init('fr')]);

    connectToSocket();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <React.Fragment>
        {loggedIn ? <ProtectedRouter /> : <GuestRouter />}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  connectToSocket: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.authProperties.token !== '',
});

const mapDispatchToProps = dispatch => ({
  connectToSocket: () => dispatch(socketConnect(io(API_URL))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
