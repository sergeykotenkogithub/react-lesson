import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducers } from './reducers/chatsReducers/chatsReducers';
import { messagesReducers } from './reducers/messagesReducer/messagesReducer';
import { createLogger } from "redux-logger";

const time = store => next => action => {
    const delay = action?.meta?.delay
    if (!delay) {
        return next(action);
    }
    const timeOut = setTimeout(() => next(action), delay);
    return () => {
        console.log('deleting...');
        clearTimeout(timeOut);
    }
}

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatReducers,
    messages: messagesReducers
});

export const store = createStore(rootReducer, applyMiddleware(logger, time));