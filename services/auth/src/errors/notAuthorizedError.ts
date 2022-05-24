import { StatusCodes } from 'http-status-codes';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';
import ApplicationError from './applicationError';

export default class NotAuthorizedError extends ApplicationError {
  status = StatusCodes.UNAUTHORIZED;

  constructor() {
    super();
  }

  serialize(): RequestErrorsResponse {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
