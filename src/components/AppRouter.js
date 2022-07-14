import React from 'react';
import { Route, Switch, Redirect, Routes, Navigate, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export default function AppRouter() {
    const user = false;
    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Components, id}) =>
                    <Route key={id} path={path} component={Components} exact={true}/>
                )}
                {/* <Navigate to={CHAT_ROUTE} replace={true}/> */}
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Components, id}) =>
                    <Route key={id} path={path} component={Components} exact={true}/>
                )}
                {/* <Redirect to={LOGIN_ROUTE}/> */}
                <Navigate to={LOGIN_ROUTE} replace={true}/>
                <Route path="*" element={<Navigate to='/'  />} />
            </Routes>
        )
}
