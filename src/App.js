import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LabelContainer from './components/LabelContainer'

class App extends Component {
  render() {
    return (
      <div className="App row">
        <LabelContainer />
      </div>
    );
  }
}

export default App;
