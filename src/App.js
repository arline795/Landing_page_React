import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div id="content">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
