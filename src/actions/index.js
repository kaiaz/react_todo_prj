export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';


let nextId = 4;

export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: nextId++,
        title
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

export function editTodo(id, title) {
    return {
        type: EDIT_TODO,
        id,
        title
    }
}

export function changeTodo(id, title) {
    return {
        type: CHANGE_TODO,
        id,
        title
    }
}