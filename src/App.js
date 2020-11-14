import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import team from './Pages/team';
import home from './Pages/home';
import league from './Pages/league';
 
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/league" component={league} />
          <Route exact path="/team" component={team} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
