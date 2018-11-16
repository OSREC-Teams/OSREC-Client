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

const ProtectedRouter = () => (
  <Router>
    <Switch>
      <Redirect from="/login" to="/" />
      <Route
        exact
        path="/"
        render={() => <p style={{ color: 'white' }}>Connected</p>}
      />
    </Switch>
  </Router>
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
