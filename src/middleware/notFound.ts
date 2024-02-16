import { Request, Response } from 'express';
import { NotFoundError } from '../helpers/CustomizedError';
import getMessages from '../locales';
import getLanguage from '../utils/getLanguage';

const notFoundMiddleware = (req: Request, _res: Response) => {
  const language = getLanguage(req);

  throw new NotFoundError(getMessages(language).errors.routeNotFound);
};

export default notFoundMiddleware;
