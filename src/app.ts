import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMiddleware from './middleware/error';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, _res: Response, next: NextFunction) =>
  next({ status: StatusCodes.INTERNAL_SERVER_ERROR })
);

app.use(errorMiddleware);

export default app;
