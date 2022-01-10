import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList
    };
  }

  //Toggle Clear Purchased
  handleClearPurchased = () => {
    //1. Capture our click
    //2. Change our state setState
    //3. Retain our previous state.
    //4. change groceries: remove all items where purchased == true

    this.setState({
      ...this.state,
      groceries: this.state.todoList.filter(item => {
        return !item.purchased;
      })
    });
  }

  //Add Item
  handleAddItem = (itemName)=> {
    //1. Capture our click
    //2. change our state
    //3. retain previous state
    //4. change groceries: add to groceries an new groceries

    const newItem = {
      name:itemName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newItem]
    });
  }

  //Toggle Purchased
  handleToggleItem = (selectedItem) => {
    //1. Capture our click
    //2. change our state
    //3. retain previous state
    //4. change groceries: find the item we clicked toggle purchased

    this.setState({
      ...this.state,
      groceries: this.state.todoList.map(item => {
        if(item.id === selectedItem.id) {
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
        
      })
    });
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <TodoForm handleAddItem={this.handleAddItem}/>
         </div>
        <TodoList handleToggleItem={this.handleToggleItem} todoList={this.state.todoList} />
        <button onClick={this.handleClearPurchased}className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);