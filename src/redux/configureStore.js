import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducers } from './reducers/chatsReducers/chatsReducers';
import { messagesReducers } from './reducers/messagesReducer/messagesReducer';
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatReducers,
    messages: messagesReducers
});

export const store = createStore(rootReducer, applyMiddleware(logger));