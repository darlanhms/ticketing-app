import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

describe('Sign in route', () => {
  it('clears the cookie after signing out', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);

    const response = await request(app).post('/api/users/signout').send();

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.get('Set-Cookie')[0]).toMatch('session=');
  });
});
