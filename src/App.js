import React, { Component } from 'react';
import AllPhotosContainer from './components/AllPhotosContainer';
import Form from './components/Form';
import './App.css';

const InstaData = require('./helpers/instaData');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
