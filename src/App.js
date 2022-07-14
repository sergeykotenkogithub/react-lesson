import React, {useContext} from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import './App.css'
import {useAuthState} from 'react-firebase-hooks/auth';
import { Contex } from ".";
import Loader from "./components/Loader";

function App() {
  const {auth} = useContext(Contex);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
