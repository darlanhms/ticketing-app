import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

describe('Current user route', () => {
  it('responds with details about the current user', async () => {
    const cookie = await signIn();

    const response = await request(app).get('/api/users/current-user').set('Cookie', cookie).send();

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.currentUser.email).toBe('test@test.com');
  });
});
