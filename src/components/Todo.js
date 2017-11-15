import React from 'react';
import './../index.css';
import Button from './Button';
import Field from './Field';


class Todo extends React.Component {
    render() {
        return(
         <div>
             <h1 className='mainTitle'>To-Do List</h1>
             <div className="panel">
                 <Field/>
                 <Button/>
             </div>
             <section className='tasks'>
                 <div className="task">Купить продукты</div>
                 <div className="task">Купить продукты</div>
                 <div className="task">Купить продукты</div>
             </section>
         </div>
        );
    }
}


export default Todo;