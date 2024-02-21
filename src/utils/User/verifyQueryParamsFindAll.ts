import { Request } from 'express';
import { BadRequestError } from '../../helpers/CustomizedError';
import Messages from '../../types/Messages';

// Validate limit and page query params and return their values parsed to integer
const verifyQueryParamsfindAll = (query: Request['query'], messages: Messages) => {
  const { limit, page } = query;
  const {
    users: {
      findAll: {
        limitParamMustBeNumber,
        PAGE_PARAM_MUST_BE_NUMBER,
        limitParamMustBeGT0,
        limitParamMustBeLTE50,
        PAGE_PARAM_MUST_BE_GT_0,
      },
    },
  } = messages;

  let limitParsed: number = 20,
    pageParsed: number = 1;

  if (typeof limit === 'string' && !isNaN(parseInt(limit))) {
    const tempLimit = parseInt(limit);
    if (!isNaN(tempLimit) && tempLimit > 0) {
      limitParsed = tempLimit;
      if (tempLimit > 50) throw new BadRequestError(limitParamMustBeLTE50);
    } else throw new BadRequestError(limitParamMustBeGT0);
  } else throw new BadRequestError(limitParamMustBeNumber);

  if (typeof page === 'string' && !isNaN(parseInt(page))) {
    const tempPage = parseInt(page);
    if (!isNaN(tempPage) && tempPage > 0) {
      pageParsed = tempPage;
    } else throw new BadRequestError(PAGE_PARAM_MUST_BE_GT_0);
  } else throw new BadRequestError(PAGE_PARAM_MUST_BE_NUMBER);

  return [limitParsed, pageParsed]; // Limit and page to be returned by default
};

export default verifyQueryParamsfindAll;
