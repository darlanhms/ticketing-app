import express from 'express';
import mongoose from 'mongoose';
import NotFoundError from './errors/notFoundError';
import { errorHandler } from './middlewares/errorHandler';
import currentUserRouter from './routes/currentUser';
import signInRouter from './routes/signIn';
import signOutRouter from './routes/signOut';
import signUpRouter from './routes/signUp';

const app = express();

app.use(express.json());

app.use('/api/users', [currentUserRouter, signInRouter, signOutRouter, signUpRouter]);

app.get('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.info('Connected to MongoDB successfully');
  } catch (error) {
    console.error(error);
  }
};

app.listen(3000, () => {
  console.info('Auth server listening on port 3000');
  start();
});
