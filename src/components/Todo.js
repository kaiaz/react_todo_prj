import React from 'react';
import './../index.css';

import Button from './Button';


class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.propertyIsEnumerable();

        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);

        this.setState({
            editing: false
        })
    }

    renderDisplay() {
        return(
            <section className='task'>
                <p className='task-text'>{this.props.title}</p>
                <Button name='Edit' className='btn btn-edit' onClick={() => this.setState({editing: true})}/>
                <Button name='Delete' className='btn btn-delete' onClick={ () => this.props.onDelete(this.props.id)}/>

            </section>
        );
    }

    renderForm() {
        return(
            < form className ='todo-edit-form' onSubmit={this.handleSubmit}>
                <input className='taskField taskField-save' type='text' ref='title' defaultValue={this.props.title} />
                <Button name='save' type='submit' className='btn btn-save'/>
            </form >
        );
    }


    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }

}


export default Todo;