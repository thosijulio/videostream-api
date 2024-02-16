import { Request, Response } from 'express';
import userService from '../../services/User';
import { StatusCodes } from 'http-status-codes';
import getMessages from '../../locales';
import getLanguage from '../../utils/getLanguage';

const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  const language = getLanguage(req);

  if (!users.length) {
    return res.status(StatusCodes.OK).json({
      message: getMessages(language).users.getAllEmpty,
      data: users,
    });
  }

  return res.status(StatusCodes.OK).json({ message: 'Ok', data: users });
};

export default getAllUsers;
