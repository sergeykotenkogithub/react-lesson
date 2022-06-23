import React from 'react';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            Home
            <Link to={'/chats'}>
                <h3>
                    Чаты
                </h3>
            </Link>
            <Link to={'/profile'}>
                <h3>
                    Профиль
                </h3>
            </Link>
        </div>
    )
}
