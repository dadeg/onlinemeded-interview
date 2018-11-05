/* global fetch */
import React, { Component } from 'react';
import './App.css';

const API_HOST = "http://ec2-107-20-93-41.compute-1.amazonaws.com";
const API_PORT = 8000;
const API_BASE_ITEMS_URL = API_HOST + ":" + API_PORT + "/api/items/";

class App extends Component {
  render() {
    console.log(process.env);
      fetch(API_BASE_ITEMS_URL).then(console.log);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            A todo app
          </p>
        </header>

      </div>
    );
  }
}

export default App;
