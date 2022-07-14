import React, { useContext } from 'react';
import { Container, Grid, Box, Button } from '@mui/material';
import { Contex } from '..';
import firebase from 'firebase/compat/app';

export default function Loader() {
  return (
    <div>
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid>
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
