import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getMessages from '../locales';
import getLanguage from '../utils/getLanguage';
import CustomizedError from '../helpers/CustomizedError';

const errorMiddleware = (error: Error & Partial<CustomizedError>, req: Request, res: Response, _next: NextFunction) => {
  const language = getLanguage(req);

  const message = error.statusCode ? error.message : getMessages(language).errors.unknownError;
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({ message });
};

export default errorMiddleware;
