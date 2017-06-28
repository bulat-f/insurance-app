import React, { Component } from 'react';
import Plan from './Plan';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Insurance App</h2>
          <h3>Powered by <a href="https://docs.vericred.com">vericred.com</a></h3>
        </div>
        <Plan />
      </div>
    );
  }
}

export default App;
