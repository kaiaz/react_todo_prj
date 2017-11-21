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
    }

    handleChange() {
        alert('edit');
    }

    handleDelete(id) {
        let todos = this.state.todos.filter( todo => todo.id !== id );

        this.setState({ todos });


    }

    handleAdd(e) {

    }

    render() {
        return (
            <div className="App">
                <h1 className='mainTitle'>React Todo</h1>

                {this.state.todos.map(todo => <Todo
                    title={todo.title}
                    id = {todo.id}
                    key = {todo.id}
                    onDelete = {this.handleDelete}
                    onChange = {this.handleChange}
                    onAdd = {this.handleAdd}
                />)}
                <div className="panel">
                    <Field/>
                </div>
            </div>
        );
    }



}

export default App;
