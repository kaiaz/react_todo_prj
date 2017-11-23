import React, { Component } from 'react';
import List from './components/List'
import Todo from './components/Todo';
import './App.css';
import Field from './components/Field';
import { addTodo, deleteTodo, editTodo} from "./actions/index";

class App extends React.Component {
    constructor(props) {
        super(props);


        this.store = this.props.store;

        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount(){
        this.unsubscribe();
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
        this.store.dispatch(deleteTodo(id));
    }

    handleAdd(title) {
      this.store.dispatch(addTodo(title));
    }

    handleEdit(id, title) {
        this.store.dispatch(editTodo(id, title));
    }

    render() {
        let todos = this.store.getState();
        return (
            <div className="App">
                <h1 className='mainTitle'>React Todo</h1>

                <main className="tasks">
                    <List
                        todos={todos}

                        onDelete = {this.handleDelete}
                        onChange = {this.handleChange}
                        onEdit = {this.handleEdit}
                    />
                    <div className="panel">
                        <Field onAdd = {this.handleAdd}/>
                    </div>
                </main>

            </div>
        );
    }



}

export default App;
