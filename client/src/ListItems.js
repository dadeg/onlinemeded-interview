/* global fetch */
import React, { Component } from 'react';
import Item from './Item';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, items } = this.props;

    return (
      <ul>
        {items.map((item, i) => {
            return <Item item={item} completeAction={completeAction} deleteAction={deleteAction} key={i} />
        })}
      </ul>
    );
  }
}

export default ListItems;
