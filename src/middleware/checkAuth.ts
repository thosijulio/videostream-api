import { Response, NextFunction, Request } from 'express';
import { BadRequestError, UnauthorizedError } from '../helpers/CustomizedError';
import jwt from 'jsonwebtoken';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const {
    general: { errors: generalErrors },
  } = req.messages;
  const token = req.headers.authorization;

  if (!token) {
    throw new BadRequestError(generalErrors.TOKEN_MUST_BE_PROVIDER);
  }

  try {
    const PRIVATE_KEY = process.env.JWT_SECRET || 'secret_key';
    const payload = jwt.verify(token, PRIVATE_KEY);
    console.log(payload);

    return next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      switch (error.message) {
        case 'jwt malformed':
          throw new BadRequestError(generalErrors.INVALID_TOKEN);

        case 'jwt expired':
          throw new UnauthorizedError(generalErrors.EXPIRED_TOKEN);

        default:
          throw new Error();
      }
    }
  }
};

export default checkAuth;
