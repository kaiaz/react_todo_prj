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
                 <div className="task">Task1</div>
                 <div className="task">Task2</div>
                 <div className="task">Task3</div>
             </section>
         </div>
        );
    }
}


export default Todo;