import { Alert } from 'react-bootstrap';
import { RequestError } from '../types/errors';

interface ErrorBoxProps {
  errors?: Array<RequestError> | null;
}

const ErrorBox = ({ errors }: ErrorBoxProps): React.ReactElement => {
  if (errors && errors.length > 0) {
    return (
      <Alert variant="danger">
        <h4>Oops...</h4>
        <ul className="my-0">
          {errors.map(err => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ul>
      </Alert>
    );
  }

  return <></>;
};

export default ErrorBox;
