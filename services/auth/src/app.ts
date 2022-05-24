import express from 'express';
import cookieSession from 'cookie-session';
import NotFoundError from './errors/notFoundError';
import { errorHandler } from './middlewares/errorHandler';
import currentUserRouter from './routes/currentUser';
import signInRouter from './routes/signIn';
import signOutRouter from './routes/signOut';
import signUpRouter from './routes/signUp';

const app = express();
app.set('trust proxy', true);

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  }),
);

app.use('/api/users', [currentUserRouter, signInRouter, signOutRouter, signUpRouter]);

app.get('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
