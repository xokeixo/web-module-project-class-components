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
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  }

  handleAddItems = (item) => {
    const newItem = {
      name: item,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newItem]
    });
  }

  handleToggle = (item) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(list => {
        if(list.id === item.id){
          return ({
            ...list,
            completed: !list.completed
          })
        }
        return list;
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>My Todo todoList</h1>
          <TodoForm handleAddItems={this.handleAddItems}/>
        </div>
        <TodoList 
          handleClear={this.handleClear}
          handleToggle={this.handleToggle}
          todoList={this.state.todoList}
        />
        <button 
          onClick={this.handleClear} 
          className='clear-btn'
        >Clear</button>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);