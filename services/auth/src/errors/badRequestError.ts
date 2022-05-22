import { StatusCodes } from 'http-status-codes';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';
import ApplicationError from './applicationError';

export default class BadRequestError extends ApplicationError {
  status = StatusCodes.BAD_REQUEST;

  constructor(private message: string) {
    super();
  }

  serialize(): RequestErrorsResponse {
    return [
      {
        message: this.message,
      },
    ];
  }
}
