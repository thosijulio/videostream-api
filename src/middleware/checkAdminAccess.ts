import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ForbiddenError, UnauthorizedError } from '../helpers/CustomizedResponseStatus';
import JWTPayload from '../types/JwtPayload';

const checkAdminAccess = (req: Request, _res: Response, next: NextFunction) => {
  const user = req.user;
  const {
    general: {
      errors: { TOKEN_MUST_BE_PROVIDER, UNAUTHORIZED_RESOURCE },
    },
  } = req.messages;

  if (!user) {
    const PRIVATE_KEY = process.env.JWT_SECRET || 'secret_key';
    const token = req.headers.authorization;

    if (token) {
      const payload = jwt.verify(token, PRIVATE_KEY) as unknown as JWTPayload;

      if (payload.user.role.name === 'admin') return next();

      throw new ForbiddenError(UNAUTHORIZED_RESOURCE);
    }

    throw new UnauthorizedError(TOKEN_MUST_BE_PROVIDER);
  }

  if (user.user.role.name === 'admin') return next();

  throw new ForbiddenError(UNAUTHORIZED_RESOURCE);
};

export default checkAdminAccess;
