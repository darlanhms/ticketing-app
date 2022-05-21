export interface RequestErrorResponse {
  message: string;
  field?: string;
}

export type RequestErrorsResponse = Array<RequestErrorResponse>;
