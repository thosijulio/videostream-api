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
  const {
    user: {
      editUser: { USER_EDITED },
    },
  } = messages;

  verifyBodyDataEditUser(data, messages);

  const result = await userService.edit(data, email, messages);

  if (result) res.status(StatusCodes.OK).json({ message: USER_EDITED, data: { result } });
};

export default editUser;
