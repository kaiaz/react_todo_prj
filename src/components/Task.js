import React from 'react';
import './../index.css';
import Button from './Button';

class Task extends React.Component {
    render() {
        return(
           <section className='task'>
               <p className='task-text'>Купить продукты</p>
               <Button>Редактировать</Button>
               <Button>Удалить</Button>
           </section>
        );
    }
}

export default Task;