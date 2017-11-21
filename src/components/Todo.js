import React from 'react';
import './../index.css';

import Button from './Button';



function Todo(props) {

        return(
             <section className='task'>
                 <p className='task-text'>{props.title}</p>
                 <Button name='Edit'/>
                 <Button name='Delete'/>
             </section>

        )

}


export default Todo;