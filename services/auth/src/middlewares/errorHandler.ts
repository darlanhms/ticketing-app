import { NextFunction, Request, Response } from 'express';
import ApplicationError from '../errors/applicationError';
import DatabaseConnectionError from '../errors/databaseConnectionError';
import RequestValidationError from '../errors/requestValidationError';

type RequestError = Error | RequestValidationError | DatabaseConnectionError;

export const errorHandler = (err: RequestError, req: Request, res: Response, _: NextFunction): Response => {
  if (err instanceof ApplicationError) {
    return res.status(err.status).send({ errors: err.serialize() });
  }

  console.error('Unexpected error: ', err);

  return res.status(500).send({
    errors: [{ message: 'Something unexpected occurred' }],
  });
};
