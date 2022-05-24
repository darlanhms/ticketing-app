import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

describe('Sign in route', () => {
  it('fails when an email that does not exist is supplied', async () => {
    const response = await request(app).post('/api/users/signin').send({
      email: 'test@test.com',
      password: 'password',
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('fails when an incorrect password is supplied', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    const response = await request(app).post('/api/users/signin').send({
      email: 'test@test.com',
      password: '123456',
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.get('Set-Cookie')).toBeUndefined();
  });

  it('responds with a cookie when given valid credentials', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    const response = await request(app).post('/api/users/signin').send({
      email: 'test@test.com',
      password: 'password',
    });

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
