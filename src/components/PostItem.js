import React from 'react';
import Carousel from 'framer-motion-carousel';
import { List, ListItem, Divider, ListItemText, Typography,Paper, Button, CardHeader } from '@mui/material'
import { useEffect, useState } from 'react';
import {getComments} from '../store/reducers/commentsReducer'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useDispatch, useSelector } from 'react-redux'
import {commentsSelector } from '../store/selectors/commentsReducer';

import '../App.css';

const PostItem = ({item, comments}) => {
    return (
        <Paper>
            <Carousel autoPlay = {false} renderDots={false}>
                {item.map((item, i) =>  (
            <div>
                <header>
                <div className="overlay">
            <h2 className = "head_post">{item.title}</h2>
            <p className="body_post">{item.body}</p>
                </div>
            </header>
            <Typography sx={{margin: 0, fontSize: '40px', color: "rgb(220, 120, 0)"}}>Comments for this post:</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {comments.map((item) => (
                <ListItem  alignItems="center">
                    <ListItemText sx={{textAlign: 'center'}}
                    primary={item.email} 
                    secondary={
              <Typography sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary">{item.body}
            </Typography>
            
          }/>
            </ListItem>
            ))}
            </List>
            </div>
                )
            )
        }
            </Carousel>
        </Paper>
        
    )
}
export default PostItem;