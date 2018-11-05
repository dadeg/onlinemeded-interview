/* global fetch */
import React, { Component } from 'react';
import Item from './Item';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, items } = this.props;

    return (
      <table>
        <thead><tr><td>Task</td><td></td><td></td></tr></thead>
        <tbody>
            {items.map((item, i) => {
                return <Item item={item} completeAction={completeAction} deleteAction={deleteAction} key={i} />
            })}
        </tbody>
      </table>
    );
  }
}

export default ListItems;
