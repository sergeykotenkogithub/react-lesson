import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChatPage() {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Автомобили'
        },
        {
            id: 2,
            name: 'Техника'
        },
        {
            id: 3,
            name: 'Авиа'
        }
    ]);

    return (
        <div>
            chats
            {
                chats.map((chat) => (
                    <div style={{ display: 'flex' }} key={chat.id}>
                        <p style={{ padding: 0, margin: 0, width: '100px' }}>{chat.name}</p>
                        <button>X</button>
                    </div>
                ))
            }
            <div><Link to={'/'}>Home</Link></div>
        </div>
    );
}
