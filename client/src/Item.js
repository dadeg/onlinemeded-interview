/* global fetch */
import React, { Component } from 'react';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, item } = this.props;

    const completedInfo = item.attributes.completed ? <td>done!</td> : <td><button onClick={() => { completeAction(item.id) }}>complete</button></td>
    return (
        <tr>
            <td>{item.attributes.title}</td>
            {completedInfo} 
            <td><button onClick={() => { deleteAction(item.id) }}>delete</button></td>
        </tr>
    );
  }
}

export default ListItems;
