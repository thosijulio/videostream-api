import { Request, Response } from 'express';
import userService from '../../services/User';
import { StatusCodes } from 'http-status-codes';
import verifyBodyDataEditUser from '../../utils/User/verifyBodyDataEditUser';

const editUser = async (req: Request, res: Response) => {
  const {
    params: { email },
    body: data,
    messages,
  } = req;

  verifyBodyDataEditUser(data, messages);

  const result = await userService.edit(data, email);

  if (result) res.status(StatusCodes.OK).json({ message: '' });
};

export default editUser;
