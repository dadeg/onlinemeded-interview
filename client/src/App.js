/* global fetch */
import React, { Component } from 'react';
import './App.css';

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
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
