import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './Containers/Blog/Blog';
import './App.css';

class App extends Component {
  render() {
    return (
      // STEP: 1 #Router
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;