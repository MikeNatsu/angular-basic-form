import express from 'express';

const app = express();

const main = async () => {
	app.listen(5000, () => {
		console.log(`Server running on: ${5000}`);
	});
};

main().catch((err) => {
	console.error(err);
});
