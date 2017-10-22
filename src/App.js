import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Database from './Database';
import Pokemon from './Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reducks! (no actual ducks here)</h1>
          <div className="nav">
            <Link to="/"><div>Home</div></Link>
            <Link to="/pokemon"><div>Pokemon</div></Link>
            <Link to="/database"><div>Database</div></Link>
          </div>
        </header>

        <div className="contentWrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/database" component={Database} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
