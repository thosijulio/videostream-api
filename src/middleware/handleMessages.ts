import { NextFunction, Request, Response } from 'express';
import getLocale from '../utils/getLocale';
import getMessages from '../locales';

const handleMessages = (req: Request, _res: Response, next: NextFunction) => {
  const locale = getLocale(req.headers.locale);
  req.messages = getMessages(locale);
  next();
};

export default handleMessages;
