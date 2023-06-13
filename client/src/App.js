// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';

function App ()
{
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" elemwnt={ Register } />
          <Route path="/login" elemwnt={ Login } />
          <Route path="/dashboard" elemwnt={ Dashboard } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
