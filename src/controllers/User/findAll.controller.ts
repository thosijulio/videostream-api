import { Request, Response } from 'express';
import userService from '../../services/User';
import { StatusCodes } from 'http-status-codes';
import getMessages from '../../locales';
import getLocale from '../../utils/getLocale';
import verifyQueryParamsfindAll from '../../utils/User/verifyQueryParamsFindAll';

const findAllUsers = async (req: Request, res: Response) => {
  const locale = getLocale(req.headers.locale);
  const [limit, page] = verifyQueryParamsfindAll(req.query, locale);
  const messages = getMessages(locale);

  const { results, total, next } = await userService.findAll(limit, page);

  if (!total || !results.length) {
    return res.status(StatusCodes.OK).json({
      message: messages.users.findAll.noUsersFound,
      data: { results, count: results.length, total, page, next },
    });
  }

  return res
    .status(StatusCodes.OK)
    .json({ message: messages.general.success.ok, data: { results, count: results.length, total, page, next } });
};

export default findAllUsers;
