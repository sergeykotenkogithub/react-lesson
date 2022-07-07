import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
// import { todosReducer } from "./reducers/todosReducer/todosReducer";
import { chatReducers } from './reducers/chatsReducers/chatsReducers'
import { todosReducer } from "./reducers/todosReducer/todosReducer";
import thunk from "redux-thunk";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatReducers,
    todos: todosReducer
    // messages: messagesReducers
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));