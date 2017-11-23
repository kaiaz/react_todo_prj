import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import Field from './components/Field';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           todos: this.props.initialData
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

   nextId() {
        this._nextId = this._nextId || 4;
         return this._nextId ++;
   }

    handleChange(id, title) {

        let todos = this.state.todos.map( todo => {
            if(todo.id === id) {
                todo.title = title
            }
            return todo;
        });
        this.setState({
            todos: todos
        })
    }

    handleDelete(id) {
        let todos = this.state.todos.filter( todo => todo.id !== id );

        this.setState({ todos });


    }

    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title
        };

        let todos = [...this.state.todos, todo];

        this.setState({ todos})
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = title
                }
                return todo;
            });
        this.setState({todos})
    }

    render() {
        return (
            <div className="App">
                <h1 className='mainTitle'>React Todo</h1>

                <main className="tasks">
                    {this.state.todos.map(todo => <Todo
                        title={todo.title}
                        id = {todo.id}
                        key = {todo.id}
                        onDelete = {this.handleDelete}
                        onChange = {this.handleChange}
                        onEdit = {this.handleEdit}
                    />)}
                    <div className="panel">
                        <Field onAdd = {this.handleAdd}/>
                    </div>
                </main>

            </div>
        );
    }



}

export default App;
