import React from 'react';
import List from '../components/List'
import {connect} from 'react-redux';
import {deleteTodo, editTodo, changeTodo} from ".././actions/index";

function mapStateToProps(state) {
    return {
        todos: state,
    };
}

function mapDispatchToProps(dispatch){
    return {
        onDelete: id =>  dispatch(deleteTodo(id)),
        onChange:  title => dispatch(changeTodo(title)),
        onEdit:  (id, title) => dispatch(editTodo(id, title))
    }
}



const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;