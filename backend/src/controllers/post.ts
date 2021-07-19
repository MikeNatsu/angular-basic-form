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

		//get 20 lastest documents
		const lastestPost = await Post.find().sort({ _id: -1 }).limit(15);
		Post.deleteMany().then(() => {
			console.log('deleted ');
		});
		Post.insertMany(lastestPost);

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
