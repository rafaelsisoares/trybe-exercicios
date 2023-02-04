import express from "express";
import dotenv from 'dotenv';

import postRouter from './routes/postRouter';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/posts', postRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));