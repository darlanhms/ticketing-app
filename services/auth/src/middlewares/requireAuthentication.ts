import { NextFunction, Request, Response } from 'express';
import NotAuthorizedError from '../errors/notAuthorizedError';

export function requireAuthentication(req: Request, _: Response, next: NextFunction): void {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  return next();
}
