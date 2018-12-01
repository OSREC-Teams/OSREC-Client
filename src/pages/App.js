import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from 'pages/LandingPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import ChatroomsCreatePage from 'pages/ChatroomsCreatePage';
import Menu from 'components/Menu';

const ProtectedRouter = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <Menu />
        <Switch>
          <Redirect from="/login" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/chatrooms/create"
            component={ChatroomsCreatePage}
          />
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

export const App = ({ loggedIn }) => (
  <React.Fragment>
    {loggedIn ? <ProtectedRouter /> : <GuestRouter />}
  </React.Fragment>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.authProperties.token !== '',
});

export default connect(mapStateToProps)(App);
