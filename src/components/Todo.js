import React from 'react';
import './../index.css';

import Button from './Button';


function Todo(props) {

    return(
             <section className='task'>
                 <p className='task-text'>{props.title}</p>
                 <Button name='Edit' className='btn btn-edit' onClick={ () => props.onChange()}/>
                 <Button name='Delete' className='btn btn-delete' onClick={ () => props.onDelete()}/>
             </section>

        )

}


export default Todo;