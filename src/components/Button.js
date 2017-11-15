import React from 'react';
import './../index.css';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="addTask">Добавить</button>
            </div>
        );
    }
}

export default Button;