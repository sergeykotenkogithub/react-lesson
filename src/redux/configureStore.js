import { combineReducers, createStore } from "redux";
import { chatReducers } from './reducers/chatsReducers/chatsReducers'
import { messagesReducers } from './reducers/messagesReducer/messagesReducer'


const rootReducer = combineReducers({
    chats: chatReducers,
    messages: messagesReducers
})


export const store = createStore(rootReducer)