import { useState } from 'react';
import axios from 'axios';
import { RequestError } from '../types/errors';

interface UseRequestData<R, B = Record<string, never>> {
  url: string;
  method: 'post' | 'get' | 'put';
  body: B;
  onSuccess?(data: R): void;
}

interface UseRequestResponse<R> {
  request(): Promise<R | undefined>;
  errors: Array<RequestError> | null;
}

export default function useRequest<R, B = Record<string, never>>({
  url,
  method,
  body,
  onSuccess,
}: UseRequestData<R, B>): UseRequestResponse<R> {
  const [errors, setErrors] = useState<Array<RequestError> | null>(null);

  // eslint-disable-next-line consistent-return
  const request = async (): Promise<R | undefined> => {
    try {
      setErrors(null);

      const response = await axios[method](url, body);

      if (onSuccess) onSuccess(response.data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors((error.response?.data as any).errors || []);
      } else {
        console.error(error);
        setErrors([{ message: 'An unexpected error occurred' }]);
      }
    }
  };

  return { request, errors };
}
