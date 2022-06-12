import './App.css';
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  let [messageList, setMessageList] = useState([])
  let [message, setMessage] = useState('');
  const ref = useRef(null);

  const send = () => {
    const input = document.querySelector('input');
    setMessage(message = input.value);
    input.value = '';
  }

  const render = () => {
    setMessageList(
      messageList = [
        {
          id: 1,
          author: 'Андрей',
          text: 'Это текст Андрея тут'
        },
        {
          id: 2,
          author: 'Иван',
          text: 'Это текст Иван тут'
        },
        {
          id: 3,
          author: 'Петр',
          text: 'Это текст Петра тут'
        },
        {
          id: 4,
          author: 'Василий',
          text: 'Это текст Василия тут'
        }
      ]
    )
  }

  useEffect(() => {
    console.log('first', ref.current);
    setTimeout(() => {
      ref.current.insertAdjacentHTML('beforeend',
        `<div> Сообщение отправлено </div>`
      );
    }, 1500);
  }, [message]);

  return (
    <div className="container my-0 mx-auto">
      <input type="text" />
      <button onClick={send}>Отправить сообщение</button>
      <div className="message" ref={ref}>{message}</div>
      <div>
        <h1>Вывод авторов и текста</h1>
        <button onClick={render}>Рендер</button>
        <div>
          {messageList.map(({ text, id }) => {
            return (
              <div key={id}>
                {text}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}