import { Request } from 'express';
import { BadRequestError } from '../../helpers/CustomizedError';
import getMessages from '../../locales';
import getLocale from '../getLocale';

// Validate limit and page query params and return their values parsed to integer
const verifyQueryParamsfindAll = (query: Request['query'], locale: string | undefined) => {
  const { limit, page } = query;
  const {
    users: {
      findAll: { limitParamMustBeNumber },
    },
  } = getMessages(getLocale(locale));

  let limitParsed: number = 20,
    pageParsed: number = 1;

  if (typeof limit === 'string' && !isNaN(parseInt(limit))) {
    const tempLimit = parseInt(limit);
    if (!isNaN(tempLimit) && tempLimit > 0) limitParsed = tempLimit;
  } else throw new BadRequestError(limitParamMustBeNumber);

  if (typeof page === 'string' && !isNaN(parseInt(page))) {
    const tempPage = parseInt(page);
    if (!isNaN(tempPage) && tempPage > 0) pageParsed = tempPage;
  }

  return [limitParsed, pageParsed]; // Limit and page to be returned by default
};

export default verifyQueryParamsfindAll;
