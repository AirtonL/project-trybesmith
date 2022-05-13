import express from 'express';
import 'dotenv/config';
import router from './routes';
import error from './middlewares/error';

const app = express();

app.use(express.json());

app.use(router);

app.use(error);

export default app;
