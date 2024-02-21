import Messages from '../Messages';

declare global {
  namespace Express {
    export interface Request {
      user: {
        email: string;
        role: string;
      } | null;
      messages: Messages;
      headers: {
        locale: string | undefined;
      };
    }
  }
}
