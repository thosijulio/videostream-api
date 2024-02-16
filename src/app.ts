import express from 'express';
import 'express-async-errors';
import router from './routers';
import errorMiddleware from './middleware/error';
import notFoundMiddleware from './middleware/notFound';

const app = express();

app.use(express.json());

app.use(router);

app.use('/*', notFoundMiddleware);

app.use(errorMiddleware);

export default app;
