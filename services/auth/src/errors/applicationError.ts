import { StatusCodes } from 'http-status-codes';
import { RequestErrorsResponse } from '../types/RequestErrorResponse';

export default abstract class ApplicationError {
  abstract status: StatusCodes;

  abstract serialize(): RequestErrorsResponse;
}
