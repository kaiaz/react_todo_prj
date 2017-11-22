import React from 'react';
import './../index.css';
import Button from './Button';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
       event.preventDefault();

       let title = this.state.title;

        if(title) {
           this.props.onAdd(title);
           this.setState({
               title: ''
           })
        }

    }

    handleChange(event) {
        let title = event.target.value;

        this.setState({title});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <input type="text" className="taskField" placeholder="Следующая задача" value={this.state.title} onChange={this.handleChange}/>
                <Button type="submit" name='Add' className = 'btn btn-add' />
            </form>

        )
    }

}

export default Field;