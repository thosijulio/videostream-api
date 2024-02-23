import { JwtPayload } from 'jsonwebtoken';
import Messages from '../Messages';
import JWTPayload from '../JwtPayload';

declare global {
  namespace jsonwebtoken {
    export interface JwtPayload {
      user: JWTPayload;
    }
  }
  namespace Express {
    export interface Request {
      user: (JwtPayload & JWTPayload) | undefined;
      messages: Messages;
      headers: {
        locale: string | undefined;
      };
    }
  }
}
