import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { getTodos } from '../redux/reducers/todosReducer/todosSelector';
import { loadTodos } from '../redux/reducers/todosReducer/todosReducer';

export default function Todos() {

    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                </div>
            ))}
        </div>
    )
}
