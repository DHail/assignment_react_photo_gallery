import React, { Component } from 'react';
import AllPhotosContainer from './components/AllPhotosContainer'
import './App.css';

const InstaData = require('./helpers/instaData');

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Loaded</p>
        <AllPhotosContainer filteredPhotos={InstaData} />
      </div>
    );
  }
}

export default App;
