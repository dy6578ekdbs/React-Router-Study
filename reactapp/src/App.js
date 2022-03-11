import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Web from './Web';
import WebPost from './WebPost';
import Home from './Home';

import './App.css';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home} />
      <Route path="/web" exact component={Web} />
   
    </Switch>
  </Router>
  );
}

export default App;
