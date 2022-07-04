import React from 'react';

export default function Messages({ title, setTitle, addMessage, chatsMessages, deleteMessage }) {

    return (
        <div>
            <h4>Messages</h4>
            <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addMessage}>+</button>
            {chatsMessages.map((message) => (
                <div key={message.id}>
                    <p>{message.title}</p>
                    <button onClick={() => deleteMessage(message.id)}>x</button>
                </div>
            ))}
        </div>
    )
}
