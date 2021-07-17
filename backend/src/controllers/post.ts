import { Request, Response } from 'express';
import { Post } from '../models/Post';

export const createPost = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, textarea } = req.body;
		const newPost = new Post({
			firstName: firstName,
			lastName: lastName,
			textarea: textarea,
		});
		newPost.save();
		res.json(newPost);
	} catch (error) {
		console.log(error);
	}
};

export const getPosts = async (_: any, res: Response) => {
	try {
		const posts = await Post.find();
		if (!posts) {
			res.status(404).send('No Post Found');
			return;
		}

		res.json(posts);
	} catch (error) {
		console.log(error);
	}
};
