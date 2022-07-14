import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Contex } from '..';

export default function Navbar() {
    const {auth} = useContext(Contex);
    const [user] = useAuthState(auth);
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={'dense'}>
                <Grid sx={{ justifyContent: 'flex-end' }} container>
                {user ?
                    <Button onClick={() => auth.signOut()} variant={'outlined'}>Выйти</Button>
                    :
                    <Link to={LOGIN_ROUTE}>
                        <Button variant={'outlined'}>Логин</Button>
                    </Link>
                }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
