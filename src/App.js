import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IntroModal from './introModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <IntroModal/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 2
          </a>
        </div>
      </div>
    );
  }
}

export default App;
