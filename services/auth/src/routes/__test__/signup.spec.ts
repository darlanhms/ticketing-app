import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

describe('Sign up route', () => {
  it('returns a 201 successful signup', async () => {
    const response = await request(app).post('/api/users/signup').send({
      email: 'test@test.com',
      password: 'password',
    });

    expect(response.status).toBe(StatusCodes.OK);
  });

  it('returns a 400 with an invalid email', async () => {
    const response = await request(app).post('/api/users/signup').send({
      email: 'invalid email',
      password: 'password',
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('returns a 400 with an invalid password', async () => {
    const response = await request(app).post('/api/users/signup').send({
      email: 'test@test.com',
      password: '1',
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('returns a 400 with missing email and password', async () => {
    const response = await request(app).post('/api/users/signup').send({});

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('disallows duplicate emails', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    const response = await request(app).post('/api/users/signup').send({
      email: 'test@test.com',
      password: 'password',
    });

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
  });

  it('sets a cookie after successful sign up', async () => {
    const response = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
