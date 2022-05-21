import { ValidationError } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import ApplicationError from './applicationError';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';

export default class RequestValidationError extends ApplicationError {
  constructor(private errors: Array<ValidationError>) {
    super();
  }

  status = StatusCodes.BAD_REQUEST;

  serialize(): RequestErrorsResponse {
    return this.errors.map(err => ({
      message: err.msg,
      field: err.param,
    }));
  }
}
