import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';

const main = async () => {
	mongoose.connect(config.dburl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const app = express();
	const port = config.port;

	app.listen(port, () => {
		console.log(`Server running on: ${port}`);
	});
};

main().catch((err) => {
	console.error(err);
});
