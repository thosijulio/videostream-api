import Messages from '../Messages';

declare global {
  namespace Express {
    export interface Request {
      userEmail: string | undefined;
      messages: Messages;
      headers: {
        locale: string | undefined;
      };
    }
  }
}
