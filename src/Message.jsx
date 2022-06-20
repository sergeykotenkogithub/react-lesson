import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Message({ author, text }) {
    return (
        <div className='messagetext'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">{author}:</Typography>
                    <Typography variant="body2">{text}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
