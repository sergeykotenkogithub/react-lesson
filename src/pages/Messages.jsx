import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessagesSelector } from '../redux/reducers/messagesReducer/messagesSelector';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { DELETE_MESSAGE, ADD_MESSAGE } from '../redux/actionTypes';



export default function Messages() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const chatsMessages = useSelector(getMessagesSelector);
    const dispatch = useDispatch();

    const messages = chatsMessages.filter((message) => {
        if (!id) return null;
        return message.chatId === +id;
    })

    const deleteMessage = (id) => {
        dispatch({
            type: DELETE_MESSAGE,
            payload: id
        })
    }

    const addMessage = () => {
        const obj = {
            id: Math.random(),
            title: title,
            chatId: +id
        }
        dispatch({
            type: ADD_MESSAGE,
            payload: obj
        })
    }

    return (
        <div>
            <h4>Messages</h4>
            <input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={addMessage}>+</button>
            {messages.map((message) => (
                <div key={message.id}>
                    <p>{message.title}</p>
                    <button onClick={() => deleteMessage(message.id)}>x</button>
                </div>
            ))}
        </div>
    )
}
