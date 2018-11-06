/* global fetch */
import React, { Component } from 'react';
import Item from './Item';
import CreateItem from './CreateItem';

class ListItems extends Component {
  
  render() {
    
    const { completeAction, deleteAction, items, onChange, createAction, title } = this.props;

    return (
      <table>
        <thead><tr><td>Task</td><td></td><td></td></tr></thead>
        <tbody>
            {items.map((item, i) => {
                return <Item item={item} completeAction={completeAction} deleteAction={deleteAction} key={i} />
            })}
            <tr>
                <td colspan="3">
                    <CreateItem 
                        onChange={onChange}
                        createAction={createAction}
                        title={title} 
                    />
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default ListItems;
