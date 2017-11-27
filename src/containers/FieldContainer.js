import React from 'react';
import { connect } from 'react-redux';
import Field from '../components/Field';
import { addTodo } from ".././actions/index";


function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addTodo(title))
    };
}

const FieldContainer = connect(null, mapDispatchToProps)(Field);
export default FieldContainer;