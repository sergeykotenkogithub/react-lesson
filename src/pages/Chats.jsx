import React from 'react';
import { useSelector } from 'react-redux';
import { getChatsSelector } from '../redux/reducers/chatsReducers/chatSelector';
import {Link} from 'react-router-dom';

export default function Chats() {
  const chats = useSelector(getChatsSelector);
  return (
    <div>
        <h4>Chats</h4>
        {chats.map((chat) => (
            <Link key={chat.id} to={`/messages/${chat.id}`}>
                {chat.name}
            </Link>

        ))}
    </div>
  )
}
