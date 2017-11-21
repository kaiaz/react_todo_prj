import React from 'react';
import './../index.css';
import Button from './Button';

function Field(props) {

    return(

        <form>
            <input type="text" className="taskField"/>
            <Button name='Add'/>
        </form>

    )

}

export default Field;