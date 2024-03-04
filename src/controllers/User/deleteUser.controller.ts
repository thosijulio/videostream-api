import { Request, Response } from 'express';
import { BadRequestError } from '../../helpers/CustomizedResponseStatus';
import userService from '../../services/User';
import { StatusCodes } from 'http-status-codes';
import validateEmail from '../../utils/User/verifyEmail';

const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { email },
    messages,
  } = req;
  const {
    users: {
      general: { INVALID_EMAIL },
      deleteUser: { USER_DELETED },
    },
  } = messages;

  if (!email || !validateEmail(email)) throw new BadRequestError(INVALID_EMAIL);

  const result = await userService.delete(email, messages);

  if (result) res.status(StatusCodes.NO_CONTENT).json({ message: USER_DELETED });
};

export default deleteUser;
