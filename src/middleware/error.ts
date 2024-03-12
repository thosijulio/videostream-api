import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getMessages from '../locales';
import getLocale from '../utils/getLocale';
import CustomizedResponseStatus from '../helpers/CustomizedResponseStatus';

const errorMiddleware = (
  error: Error & Partial<CustomizedResponseStatus>,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { general: generalMessages } = req.messages || getMessages(getLocale(req.headers.locale));

  let message: string;
  let statusCode: number;

  if (error.statusCode) {
    message = error.message;
    statusCode = error.statusCode;
  } else {
    console.error(error.message);
    message = generalMessages.errors.UNKNOWN_ERROR;
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }

  res.status(statusCode).json({ message });
};

export default errorMiddleware;
