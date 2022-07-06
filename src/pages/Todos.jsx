import React, { useEffect } from 'react'
// https://jsonplaceholder.typicode.com/todos
export default function Todos() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => console.log(data))

    });

    return (
        <div>Todos</div>
    )
}
