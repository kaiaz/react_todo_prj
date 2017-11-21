import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import Field from './components/Field';

function App(props) {


    return (
      <div className="App">
        <h1 className='mainTitle'>To-Do List</h1>
        <div className="panel">
          <Field/>
        </div>
          {props.todos.map(todo => <Todo
                   title={todo.title}
                   id = {todo.id}
                   key = {todo.id}
            />)}
      </div>
    );

}

export default App;
