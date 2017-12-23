import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './components/Label'

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Label description="test" id="123"/>
        <Label description="test" id="123"/>
      </div>
    );
  }
}

export default App;
