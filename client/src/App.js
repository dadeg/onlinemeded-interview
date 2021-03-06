/* global fetch */
import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';

const API_HOST = "http://ec2-107-20-93-41.compute-1.amazonaws.com";
const API_PORT = 8000;
const API_BASE_ITEMS_URL = API_HOST + ":" + API_PORT + "/api/items/";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { items: [], titleForCreating: "" };

    this.create = this.create.bind(this);
    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentWillMount() {
    this.items();
  }

  create() {
    const { titleForCreating } = this.state;

    fetch(API_BASE_ITEMS_URL, { 
      method: "POST", 
      body: JSON.stringify({ title: titleForCreating }) ,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.items();

      // clear out the field for the next item
      this.setState({ titleForCreating: "" });
    });
  }

  updateTitle(event) {
    this.setState({ titleForCreating: event.target.value });
  }

  complete(id) {
    fetch(API_BASE_ITEMS_URL + id, { 
      method: "PUT", 
      body: JSON.stringify({ completed: 1 }),
      headers: {
        'Content-Type': 'application/json'
      } 
    })
    .then(() => {
      this.items();
    });
  }

  delete(id) {
    fetch(API_BASE_ITEMS_URL + id, { method: "DELETE" })
      .then(() => {
        this.items();
      });
  }

  items() {
    fetch(API_BASE_ITEMS_URL)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({ items: results.data });
      });
  }

  render() {
      
    const { items, titleForCreating } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            A todo app
          </p>
        </header>
      
        <ListItems 
          items={items} 
          completeAction={this.complete} 
          deleteAction={this.delete}
          onChange={this.updateTitle}
          createAction={this.create}
          title={titleForCreating}
        />
      </div>
    );
  }
}

export default App;
