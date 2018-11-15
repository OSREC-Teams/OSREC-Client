import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from 'pages/LandingPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const ProtectedRouter = () => <Router />;

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

const mapStateToProps = () => ({
  loggedIn: false,
});

export default connect(mapStateToProps)(App);
