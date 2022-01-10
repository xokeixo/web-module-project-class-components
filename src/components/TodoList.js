// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
// import App from '../App';

import Todo from './Todo';

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="item-list">
      {props.todoList.map(item => (
        <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;