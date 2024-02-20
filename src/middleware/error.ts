import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getMessages from '../locales';
import getLocale from '../utils/getLocale';
import CustomizedError from '../helpers/CustomizedError';

const errorMiddleware = (
  error: Error & Partial<CustomizedError>,
  { headers: { locale } }: Request,
  res: Response,
  _next: NextFunction
) => {
  const { general: generalMessages } = getMessages(getLocale(locale));

  let message: string;
  let statusCode: number;

  if (error.statusCode) {
    message = error.message;
    statusCode = error.statusCode;
  } else {
    console.log(error.message);
    message = generalMessages.errors.unknownError;
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }

  res.status(statusCode).json({ message });
};

export default errorMiddleware;
