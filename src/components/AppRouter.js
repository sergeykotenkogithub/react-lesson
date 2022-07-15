import React, { useContext, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Contex } from '..';


export default function AppRouter() {
    const {auth} = useContext(Contex);
    const [user] = useAuthState(auth);
    console.log(user);
    let navigate = useNavigate();

    // useEffect(()=>{
    //     if (user){
    //       navigate('/chat')
    //     }
    // }, [])


    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, components}) =>
                    <Route key={path} path={path} element={components} />
                )}
                <Route path='*' element={<Navigate to={CHAT_ROUTE} />}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, components}) =>
                    <Route key={path} path={path} element={components}/>
                )}
                <Route path='*' element={<Navigate to={LOGIN_ROUTE} />}/>
            </Routes>
        )
}
