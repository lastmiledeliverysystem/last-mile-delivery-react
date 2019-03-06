import React, { Component } from 'react';
import Main from "./Components/Main/Main";
import './App.css';

class App extends Component {

  state = {
    data:"First app"
  }

  render() {
    return (
      <Main/>
    );
  }
}

export default App;
