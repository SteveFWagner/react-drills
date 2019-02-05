import React, { Component } from 'react';
import './App.css';
import Image from "./components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url="https://images.unsplash.com/photo-1549223123-e05d6e08643d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      </div>
    );
  }
}

export default App;
