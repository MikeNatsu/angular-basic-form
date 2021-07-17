import dotenv from 'dotenv';
dotenv.config();

export default {
	port: process.env.PORT || 3000,
	dburl: process.env.DBURL || 'mongodb://127.0.0.1:27017/basic-form',
};
