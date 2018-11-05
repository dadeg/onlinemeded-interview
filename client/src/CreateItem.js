/* global fetch */
import React, { Component } from 'react';

class CreateItem extends Component {
  
  render() {
    
    const { onChange, createAction, title } = this.props;

    return (
      <div>
        <input type="text" onChange={onChange} value={title} />
        <button onClick={createAction}>Create</button>
      </div>
    );
  }
}

export default CreateItem;
