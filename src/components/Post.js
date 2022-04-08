import React from 'react';
import Carousel from 'framer-motion-carousel';
import {Typography,Paper, Button } from '@mui/material';
import PostItem from './PostItem';
import { getPosts } from '../store/reducers/postReducer';
import {commentsSelector } from '../store/selectors/commentsReducer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {postsSelector } from '../store/selectors/postReducer';
import {getComments} from '../store/reducers/commentsReducer'
const Post = () =>{ 
    const [commentsForPost, setCommentForPost] = useState()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [])

       useEffect(() => {
        dispatch(getComments(1));
        
    }, [])
    const commentsFromState = useSelector((state) => commentsSelector(state));
    const list = useSelector((state) => postsSelector(state));
    
    
    return (
        <div style={{ width: '100%', height: '100%', margin: "0 auto" }}>
            <PostItem item = {list} comments={commentsFromState} />
        </div>
    )
}

export default Post;