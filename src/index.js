import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todos from './todos';
import {addTodo, deleteTodo, editTodo} from "./actions/index";


const store = createStore(reducer, todos);

store.subscribe(() => console.log(store.getState()));




 ReactDOM.render(
     <App store = {store}/>,
     document.getElementById('root'));
 registerServiceWorker();


