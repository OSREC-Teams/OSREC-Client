import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from 'pages/LandingPage';

const ProtectedRouter = () => <Router />;

const GuestRouter = () => (
  <Router>
    <Route path="/" component={LandingPage} />
  </Router>
);

const App = ({ loggedIn }) => (
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
