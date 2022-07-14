import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { Contex } from '..';
import { Container, Grid, Button, TextField, Avatar } from '@mui/material';
import Loader from './Loader';
import firebase from 'firebase/compat/app';

export default function Chat() {
  const {auth, firestore} = useContext(Contex);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setValue('');
  }

  if(loading) {
    return <Loader/>
  }

  return (
      <Container>
        <Grid container style={{height: window.innerHeight - 70, marginTop: 20}} justifyContent={'center'}>
          <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
            {messages.map(message =>
                <div style={{
                    margin: 10,
                    border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                    marginLeft: user.uid === message.uid ? 'auto' : '10px',
                    width: 'fit-content',
                    padding: 10
                  }} key={message.createdAt}>
                  <Grid container>
                    <Avatar src={message.photoURL}/>
                    <div style={{paddingLeft: 15}}>{message.displayName}</div>
                  </Grid>
                  <div style={{
                    paddingTop: 8,
                    color: user.uid === message.uid ? 'green' : 'red',
                    }}>
                    {message.text}
                  </div>
                </div>
              )}
          </div>
          <Grid
              container
              direction={'column'}
              alignItems={'flex-end'}
              style={{width: '80%'}}
            >
                <TextField
                  fullWidth
                  rowsmax={2}
                  variant={'outlined'}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <Button onClick={sendMessage} variant={'outlined'}>Отправить</Button>
            </Grid>
        </Grid>
      </Container>
  )
}
