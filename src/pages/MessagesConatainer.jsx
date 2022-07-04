import React from 'react'
import Messages from './Messages';
import { useSelector, useDispatch } from 'react-redux';
import { getMessagesSelector } from '../redux/reducers/messagesReducer/messagesSelector';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { DELETE_MESSAGE, ADD_MESSAGE } from '../redux/actionTypes';

export default function MessagesConatainer() {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const chatsMessages = useSelector(getMessagesSelector);
    const dispatch = useDispatch();

    // const messages = chatsMessages.filter((message) => {
    //     if (!id) return null;
    //     return message.chatId === +id;
    // })

    const deleteMessage = (id) => {
        const cancel = () => dispatch({
            type: DELETE_MESSAGE,
            payload: id,
            meta: {
                delay: 3000
            }
        })
        cancel();
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
            <Messages addMessage={addMessage()} deleteMessage={deleteMessage} title={title} setTitle={setTitle} chatsMessages={chatsMessages} />
        </div>
    )
}
