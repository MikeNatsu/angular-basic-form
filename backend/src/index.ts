import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';
import cors from 'cors';
import { formRoute } from './controllers/routes';

const main = async () => {
	mongoose.connect(config.dburl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const app = express();
	app.use(cors());
	app.use(formRoute);

	const port = config.port;

	app.listen(port, () => {
		console.log(`Server running on: ${port}`);
	});
};

main().catch((err) => {
	console.error(err);
});
