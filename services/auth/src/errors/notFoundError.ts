import { StatusCodes } from 'http-status-codes';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';
import ApplicationError from './applicationError';

export default class NotFoundError extends ApplicationError {
  status = StatusCodes.NOT_FOUND;

  serialize(): RequestErrorsResponse {
    return [
      {
        message: 'Not found',
      },
    ];
  }
}
