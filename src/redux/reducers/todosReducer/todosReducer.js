import {GET_TODOS} from '../../actionTypes'

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}

export const loadTodos = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            dispatch({
                type: GET_TODOS,
                payload: data
            })
        } catch(e) {
            console.log(e.toString())
        }
    }
}