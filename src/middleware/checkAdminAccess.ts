import { NextFunction, Request, Response } from 'express';

const checkAdminAccess = (req: Request, _res: Response, _next: NextFunction) => {
  const user = req.user;

  if (user?.role === 'admin') {
    console.log('ok');
  }
};

export default checkAdminAccess;
