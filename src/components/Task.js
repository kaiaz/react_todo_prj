import React from 'react';
import './../index.css';
import Button from './Button';

class Task extends React.Component {
    render() {
        return(
           <section className='task'>
               <p className='task-text'>Купить продукты</p>
            <Button name='Edit'/>
            <Button name='Delete'/>
           </section>
        );
    }
}

export default Task;