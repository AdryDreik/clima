import React, { Component } from 'react';
import WheaterLocation from './components/wheaterLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WheaterLocation></WheaterLocation>
      </div>
    );
  }
}

export default App;
