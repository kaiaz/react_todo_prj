import React from 'react';
import List from '../components/List'
import {deleteTodo, editTodo, changeTodo} from ".././actions/index";


class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }


    handleDelete(id) {
        this.store.dispatch(deleteTodo(id));
    }

    handleChange(id, title) {
        this.store.dispatch(changeTodo(title));
    }



    handleEdit(id, title) {
        this.store.dispatch(editTodo(id, title));
    }

    render() {
        const todos = this.store.getState();

        return (
            <List
            todos = {todos}
            onDelete ={this.handleDelete}
            onChange= {this.handleChange}
            onEdit= {this.handleEdit}
            />
        );
    }
}

export default ListContainer;