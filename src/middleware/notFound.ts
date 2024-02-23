import { Response, NextFunction, Request } from 'express';
import { NotFoundError } from '../helpers/CustomizedResponseStatus';
import getMessages from '../locales';
import getLocale from '../utils/getLocale';

function notFoundMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const { general: generalMessages } = getMessages(getLocale(req.headers.locale));

  next(new NotFoundError(generalMessages.errors.ROUTE_NOT_FOUND));
}

export default notFoundMiddleware;
