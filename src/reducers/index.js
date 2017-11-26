import { ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_TODO} from "../actions/index";

function todoReducer(state = {}, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                title: action.title
            };

        case EDIT_TODO:
             if(state.id === action.id) {
                 state.title = action.title
             }
            return state;

        case CHANGE_TODO:
            if(state.id === action.id) {
                state.title = action.title
            }
            return state;

    }
}


export default function reducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
           return  [...state, todoReducer(undefined, action)];

        case DELETE_TODO:
            return  state.filter( todo => todo.id !== action.id );

        case EDIT_TODO:
            return  state.map(todo => todoReducer(todo, action));

        case CHANGE_TODO:
            return state.map( todo =>  todoReducer(todo, action));

        default:
           return state;
    }
}