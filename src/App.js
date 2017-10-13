import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Word from './Word';
import DataBase from './DataBase';
import Pokemon from './Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reducks! (no actual ducks here)</h1>
          <div className="nav">
            <Link to="/"><div>Word</div></Link>
            <Link to="/pokemon"><div>Pokemon</div></Link>
            <Link to="/database"><div>DataBase</div></Link>
          </div>
        </header>

        <div className="contentWrapper">
          <Switch>
            <Route exact path="/" component={Word} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/database" component={DataBase} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
