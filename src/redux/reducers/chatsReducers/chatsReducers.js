import { GET_MESSAGES } from "../../actionTypes"

const inialState = {
    chats: [
        {
            id: 1,
            name: 'Vasiliy'
        },
        {
            id: 2,
            name: 'Petr'
        }
    ]
}

export const chatReducers = (state = inialState, action) => {
    switch(action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                chats: state.chats
            }
        default:
            return state
    }
}