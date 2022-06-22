import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { makeStyles, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Chats from './Chats';
import Message from './Message';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const inputRef = useRef(null);
  const [chatList] = useState([
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
  ])

  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => (
        alert(author + 'your message sent')
      ), 1500)
    }
    focusTextField(inputRef.current)
  }, [messageList, author]);

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }

  function onButtonClick() {
    let newid = 1;
    if (messageList.length > 0) newid = messageList[messageList.length - 1].id + 1;
    if (author.length > 0) {
      setMessageList(messages =>
        [...messages,
        {
          info: text,
          author: author,
          id: newid
        }
        ]
      )
    } else {
      alert('Author name needed')
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setMessageList(prevState => [...prevState, {
  //     id: giveLastId(prevState),
  //     author,
  //     text
  //   }])
  // }

  // function giveLastId(array) {
  //   return array.length ? array[array.length - 1].id + 1 : 0;
  // }

  // function botAnswer() {
  //   const lastAuthor = messageList[messageList.length - 1];
  //   if (lastAuthor && lastAuthor.author) {
  //     setMessageList(prevState => [...prevState, {
  //       id: giveLastId(prevState),
  //       text: `Сообщение автора ${lastAuthor.author} отправлено`

  //     }])
  //   }
  // }

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <div className='chat'>
      <Box sx={{ flexGrow: 1, maxWidth: 300 }}>
        <Grid item xs={6} md={6}>
          <Typography sx={{ mt: 4, mb: 2, ml: 3 }} variant="h6" component="div">
            Чаты:
          </Typography>
          <Demo>
            <List>
              {
                chatList.map(({ name, id }) => {
                  return (
                    <Chats name={name} key={id} />
                  )
                })}
            </List>
          </Demo>
        </Grid>
      </Box>

      <div className='messages'>
        <Box
          component="form"
          sx={{ m: 1, borderRadius: '10px', width: '400px', mardin: '10px', padding: '15px' }}
          noValidate
          autoComplete='off'
        >
          <Typography sx={{ mt: 4, mb: 2, ml: 3 }} variant="h5" component="div">
            Messages
          </Typography>
          <TextField
            sx={{ margin: '10px 0', backgroundColo: '#fff' }}
            required
            fullWidth
            id='outlined-required'
            label="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
          </TextField>
          <TextField
            sx={{ margin: '10px 0', backgroundColo: '#fff' }}
            fullWidth
            id='outlined-required-1'
            label="Text"
            value={text}
            inputRef={inputRef}
            onChange={(e) => setText(e.target.value)}
          >
          </TextField>
          <Button
            sx={{ margin: '10px 0' }}
            variant="outlined"
            size='large'
            fullWidth
            onClick={onButtonClick}
          >
            Send
          </Button>
        </Box>
        {
          messageList.map((item) => {
            return (
              <Message author={item.author} info={item.info} key={item.id} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
