/* global fetch */
import React, { Component } from 'react';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, item } = this.props;

    const completedInfo = item.attributes.completed ? <td>done!</td> : <td onClick={() => { completeAction(item.id) }}>complete</td>
    return (
        <tr>
            <td>{item.attributes.title}</td>
            {completedInfo} 
            <td onClick={() => { deleteAction(item.id) }}>delete</td>
        </tr>
    );
  }
}

export default ListItems;
