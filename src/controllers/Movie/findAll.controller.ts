import { Request, Response } from 'express';
import movieService from '../../services/Movie';
import { StatusCodes } from 'http-status-codes';
import verifyQueryParamsfindAll from '../../utils/Movie/verifyQueryParamsFindAll';
import getLocale from '../../utils/getLocale';

const findAllMovies = async ({ query, messages, headers }: Request, res: Response) => {
  const [limit, page] = verifyQueryParamsfindAll(query, messages);
  const {
    user: {
      findAll: { NO_USERS_FOUND },
    },
    general: {
      success: { OK },
    },
  } = messages;

  const result = await movieService.findAll(limit, getLocale(headers.locale), page, messages);

  if (result) {
    const { results, total, next } = result;

    if (!total || !results.length) {
      return res.status(StatusCodes.OK).json({
        message: NO_USERS_FOUND,
        data: { results, count: results.length, total, page, next },
      });
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: OK, data: { results, count: results.length, total, page, next } });
  }
};

export default findAllMovies;
