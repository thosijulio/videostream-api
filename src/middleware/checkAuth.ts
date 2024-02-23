import { Response, NextFunction, Request } from 'express';
import { BadRequestError, UnauthorizedError } from '../helpers/CustomizedResponseStatus';
import jwt from 'jsonwebtoken';
import JWTPayload from '../types/JwtPayload';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const {
    general: { errors: generalErrors },
  } = req.messages;
  const PRIVATE_KEY = process.env.JWT_SECRET || 'secret_key';
  const token = req.headers.authorization;

  if (!token) {
    throw new BadRequestError(generalErrors.TOKEN_MUST_BE_PROVIDER);
  }

  try {
    const payload = jwt.verify(token, PRIVATE_KEY) as unknown as JWTPayload;

    req.user = payload;

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
