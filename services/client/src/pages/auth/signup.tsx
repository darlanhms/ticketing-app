import { NextPage } from 'next';
import { FormEventHandler, useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Router from 'next/router';
import useRequest from '../../hooks/useRequest';
import ErrorBox from '../../components/ErrorBox';

const SignUp: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { request, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    await request();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <FormGroup className="mb-3">
        <FormLabel>Email Address</FormLabel>
        <FormControl value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Password</FormLabel>
        <FormControl type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>

      <ErrorBox errors={errors} />

      <Button type="submit" variant="primary">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
