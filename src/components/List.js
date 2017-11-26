import React from 'react';
import Todo from './Todo';



function List (props) {

        return (
            <section>
                {props.todos.map(todo => <Todo
                    title={todo.title}
                    id = {todo.id}
                    key = {todo.id}
                    onDelete = {props.onDelete}
                    onChange = {props.onChange}
                    onEdit = {props.onEdit}
                />)}
            </section>
        );

}

export default List;