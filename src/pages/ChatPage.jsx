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

    const [name, setName] = useState('');

    const deleteHandler = (id) => {
        const filteredItems = chats.filter((chat) => chat.id !== id)
        setChats(filteredItems);
    }

    const addHandler = () => {
        let random = Math.random();
        const obj = {
            id: random,
            name: name
        }
        setChats(prevState => [...prevState, obj]);
    }

    return (
        <div>
            <h1>Chats:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addHandler}>Add chat</button>
            {
                chats.map((chat) => (
                    <div style={{ display: 'flex' }} key={chat.id}>
                        <p style={{ padding: 0, margin: 0, width: '100px' }}>{chat.name}</p>
                        <button onClick={() => deleteHandler(chat.id)}>X</button>
                    </div>
                ))
            }
            <div style={{ paddingTop: '10px' }}><Link to={'/'}>Home</Link></div>
        </div>
    );
}
