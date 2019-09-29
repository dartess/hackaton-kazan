import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Login from './Login';
import Statistics from './Statistics';
import Hr from './Hr';
import Economic from './Economic';
import Results from './Results';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login/">
          <Login />
        </Route>
        <Route path="/hr/welcome/">
          <Hr />
        </Route>
        <Route path="/hr/statistics/">
          <Statistics />
        </Route>
        <Route path="/hr/economic/">
          <Economic />
        </Route>
        <Route path="/hr/results/">
          <Results />
        </Route>
        <Redirect to="/login/" /> 
      </Switch>
    </Router>
  );
}

export default App;
