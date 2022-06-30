import  { DELETE_MESSAGE, ADD_MESSAGE } from '../../actionTypes'

const inialState = {
    messages: [
        {
            id: 1,
            title: 'How are you?',
            chatId: 1
        },
        {
            id: 2,
            title: 'Nice',
            chatId: 2
        }
    ]
}

export const messagesReducers = (state = inialState, action) => {

    switch(action.type) {
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}