import { Request, Response } from 'express';
import userService from '../../services/User';
import { StatusCodes } from 'http-status-codes';
import verifyQueryParamsfindAll from '../../utils/User/verifyQueryParamsFindAll';

const findAllUsers = async (req: Request, res: Response) => {
  const [limit, page] = verifyQueryParamsfindAll(req.query, req.messages);
  const {
    user: {
      findAll: { NO_USERS_FOUND },
    },
    general: {
      success: { OK },
    },
  } = req.messages;

  const { results, total, next } = await userService.findAll(limit, page);

  if (!total || !results.length) {
    return res.status(StatusCodes.OK).json({
      message: NO_USERS_FOUND,
      data: { results, count: results.length, total, page, next },
    });
  }

  return res.status(StatusCodes.OK).json({ message: OK, data: { results, count: results.length, total, page, next } });
};

export default findAllUsers;
