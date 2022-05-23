import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import RequestValidationError from '../errors/requestValidationError';

export function validateRequest(req: Request, _: Response, next: NextFunction): void {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    throw new RequestValidationError(validationErrors.array());
  }

  return next();
}
