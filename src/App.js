import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Topics from './Components/Topics';
import Topic from './Components/Topic';
import './App.css';

const RouterComponent = () => (
  <Router>
    <div>
      <div className="nav-container">
        <div className="nav-link"><Link to="/">Home</Link></div>
        <div className="nav-link"><Link to="/about">About</Link></div>
        <div className="nav-link"><Link to="/topics">Topics</Link></div>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/topics/:gameId" component={Topic} />
    </div>
  </Router>
);
export default RouterComponent;
