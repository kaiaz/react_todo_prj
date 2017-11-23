export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


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