import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

it('returns a 201 successful signup', async () => {
  const response = await request(app).post('/api/users/signup').send({
    email: 'test@test.com',
    password: 'password',
  });

  expect(response.status).toBe(StatusCodes.OK);
});
