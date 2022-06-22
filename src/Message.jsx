import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Message({ author, info }) {
    return (
        <div className='messagetext'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" component="div">{author}:</Typography>
                    <Typography sx={{ pl: 2 }} variant="h6">{info}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
