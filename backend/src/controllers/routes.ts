import express from 'express';
import { createPost, getPosts } from './post';

export const formRoute = express.Router();

formRoute.use(express.json());
formRoute.post('/post', createPost);
formRoute.get('/posts', getPosts);
