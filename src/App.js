import React, { Component } from 'react';
import PhotoContainer from './components/PhotoContainer';
import './App.css';

const InstaData = require('./helpers/instaData');

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Loaded</p>
        <PhotoContainer data={InstaData[0]} />
      </div>
    );
  }
}

export default App;
