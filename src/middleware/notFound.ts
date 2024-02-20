import { Request, Response } from 'express';
import { NotFoundError } from '../helpers/CustomizedError';
import getMessages from '../locales';
import getLocale from '../utils/getLocale';

const notFoundMiddleware = (req: Request, _res: Response) => {
  const { general: generalMessages } = getMessages(getLocale(req.headers.locale));

  throw new NotFoundError(generalMessages.errors.routeNotFound);
};

export default notFoundMiddleware;
