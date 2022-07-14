import React, { useContext } from 'react';
import { Route, Switch, Redirect, Routes, Navigate, useNavigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import Chat from './Chat';
import Login from './Login';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Contex } from '..';


export default function AppRouter() {
    const {auth} = useContext(Contex);
    const [user] = useAuthState(auth);
    console.log(user);
    let navigate = useNavigate();
    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Components}) =>
                    <Route key={path} path={path} component={Components}/>
                )}
                {/* <Route path='*' element={<Chat/>} exact={true}/> */}
                {/* <Route path='*' element={<Navigate to={CHAT_ROUTE} element={<Chat/>} />}/> */}
                <Route path='*' element={<Chat/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Components}) =>
                    <Route key={path} path={path} component={Components}/>
                )}
                <Route path='*' element={<Login/>}/>
            </Routes>
        )
}
