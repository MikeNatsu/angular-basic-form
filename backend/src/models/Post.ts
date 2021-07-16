import mongoose from 'mongoose';

export type PostDocument = mongoose.Document & {
	fistName: string;
	lastName: string;
	textarea: string;
	created: Date;
};

const postSchema = new mongoose.Schema<PostDocument>(
	{
		firstName: String,
		lastName: String,
		textarea: String,
		created: Date,
	},
	{ timestamps: true }
);

export const Post = mongoose.model<PostDocument>('Post', postSchema);
