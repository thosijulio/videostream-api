import { Request, Response } from 'express';
import authService from '../../services/Auth';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../helpers/CustomizedResponseStatus';

const login = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  const {
    auth: {
      login: { UNKNOWN_ERROR_ON_LOGIN },
    },
    general: {
      success: { OK },
    },
  } = req.messages;

  const token = await authService.login(user, password, req.messages);

  if (token) {
    return res.status(StatusCodes.CREATED).json({
      message: OK,
      data: {
        token,
      },
    });
  }

  throw new UnauthorizedError(UNKNOWN_ERROR_ON_LOGIN);
};

export default login;
