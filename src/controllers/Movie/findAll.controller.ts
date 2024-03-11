import { Request, Response } from 'express';
import movieService from '../../services/Movie';
import { StatusCodes } from 'http-status-codes';
import verifyQueryParamsfindAll from '../../utils/Movie/verifyQueryParamsFindAll';
import getLocale from '../../utils/getLocale';

const findAllMovies = async (req: Request, res: Response) => {
  const [limit, page] = verifyQueryParamsfindAll(req.query, req.messages);
  const {
    user: {
      findAll: { NO_USERS_FOUND },
    },
    general: {
      success: { OK },
    },
  } = req.messages;

  const result = await movieService.findAll(limit, getLocale(req.headers.locale), page);

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
  } else {
    console.log(result);
    return res.status(404).json({ status: 'erro' });
  }
};

export default findAllMovies;
