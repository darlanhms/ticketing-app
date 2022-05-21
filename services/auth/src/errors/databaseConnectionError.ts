import { StatusCodes } from 'http-status-codes';
import ApplicationError from './applicationError';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';

export default class DatabaseConnectionError extends ApplicationError {
  status = StatusCodes.INTERNAL_SERVER_ERROR;

  serialize(): RequestErrorsResponse {
    return [
      {
        message: 'Error connecting to a database',
      },
    ];
  }
}
