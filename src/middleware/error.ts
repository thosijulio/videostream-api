import { NextFunction, Request, Response } from "express";
import ErrorType from "../types/errorType";
import { StatusCodes } from "http-status-codes";
import getMessages from "../../locales";
import getLanguage from "../utils/getLanguage";

const errorMiddleware = (err: ErrorType, req: Request, res: Response, _next: NextFunction) => {
  const language = getLanguage(req.headers.language);

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message || getMessages(language).errors.unknownError});
}

export default errorMiddleware;
