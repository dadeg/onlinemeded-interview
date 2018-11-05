/* global fetch */
import React, { Component } from 'react';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, item } = this.props;

    const completedInfo = item.attributes.completed ? <span>completed!</span> : <span onClick={() => { completeAction(item.id) }}>complete</span>
    return (
        <div>
            <span onClick={() => { deleteAction(item.id) }}>delete</span> 
            {completedInfo} 
            <span>{item.attributes.title}</span>
        </div>
    );
  }
}

export default ListItems;
