import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMiddleware from './middleware/error';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response, next: NextFunction) => next({ status: StatusCodes.INTERNAL_SERVER_ERROR }));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
