import React from 'react';
import './../index.css';
import Task from './Task';
import Button from './Button';
import Field from './Field';


class Todo extends React.Component {
    render() {
        return(
         <div>
             <h1 className='mainTitle'>To-Do List</h1>
             <div className="panel">
                 <Field/>
             </div>
             <section className='tasks'>
                <Task/>
                <Task/>
                <Task/>
             </section>
         </div>
        );
    }
}


export default Todo;