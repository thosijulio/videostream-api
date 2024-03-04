import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import verifyBodyDataCreateUser from '../../utils/User/verifyBodyDataCreateUser';
import userService from '../../services/User';

const createUser = async (req: Request, res: Response) => {
  const { messages, body: data } = req;
  const {
    users: {
      createUser: { USER_CREATED },
    },
  } = messages;

  verifyBodyDataCreateUser(data, messages);

  const result = await userService.create(data, messages);

  if (result) res.status(StatusCodes.CREATED).json({ message: USER_CREATED });
};

export default createUser;
