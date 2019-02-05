import React, { Component } from 'react';
import './App.css';
import TextDuplicator from "./components/TextDuplicator"

class App extends Component {
  render() {
    return (
      <div className="App">
          <TextDuplicator/>
      </div>
    );
  }
}

export default App;
