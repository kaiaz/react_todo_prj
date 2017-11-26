import React from 'react';
import Field from '../components/Field';
import { addTodo } from ".././actions/index";


class FieldContainer extends React.Component {
    constructor(props) {
        super(props);


        this.store = this.props.store;

        this.handleAdd = this.handleAdd.bind(this);

    }

    handleAdd(title) {
        this.store.dispatch(addTodo(title));
    }

    render() {
        return (
           <Field onAdd ={this.handleAdd}/>
        )
    }
}

export default FieldContainer;