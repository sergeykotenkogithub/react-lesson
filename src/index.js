import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import "firebase/compat/firestore";


firebase.initializeApp({
  apiKey: "AIzaSyAXBp-1LjUJgeQk0IgIb0m9iYcijsny_t4",
  authDomain: "chat-react-c5af3.firebaseapp.com",
  projectId: "chat-react-c5af3",
  storageBucket: "chat-react-c5af3.appspot.com",
  messagingSenderId: "461297718531",
  appId: "1:461297718531:web:0d85b2f37979934d100536"
});

export const Contex = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

// const firebaseConfig = {

// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contex.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Contex.Provider>
  </React.StrictMode>
);
