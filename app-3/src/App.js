import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterList from './components/FilterList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterList/>
      </div>
    );
  }
}

export default App;
