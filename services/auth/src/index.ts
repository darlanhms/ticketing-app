import mongoose from 'mongoose';
import app from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT key is not set in env vars.');
  }

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
