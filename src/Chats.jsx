import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Chats({ name }) {
    return (
        <ListItem
        // secondaryAction={
        //   <IconButton edge="end" aria-label="delete">
        //     <DeleteIcon />
        //   </IconButton>
        // }
        >
            <ListItemAvatar>

                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
            />
        </ListItem>
    )
}
