import React from 'react';
import './../index.css';

class Field extends React.Component {
    render() {
        return(
            <div>
                <input type="text" className="taskField"/>
            </div>
        )
    }
}

export default Field;