import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserPayload from '../types/UserPayload';

export function currentUser(req: Request, _: Response, next: NextFunction): void {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY as string) as UserPayload;

    req.currentUser = payload;

    return next();
  } catch (error) {
    return next();
  }
}
