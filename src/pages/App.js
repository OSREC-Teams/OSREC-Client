import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import Register from 'pages/Register';

const App = () => (
  <Router>
    <Switch>
      <Route key={0} exact path="/" component={LandingPage} />
      <Route key={1} path="/register" component={Register} />
    </Switch>
  </Router>
);

export default App;
