import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';

const App = () => (
  <Router>
    <Route path="/" component={LandingPage} />
  </Router>
);

export default App;
