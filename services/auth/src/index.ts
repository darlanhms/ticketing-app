import express from 'express';
import currentUserRouter from './routes/currentUser';
import signInRouter from './routes/signIn';
import signOutRouter from './routes/signOut';
import signUpRouter from './routes/signUp';

const app = express();

app.use(express.json());

app.use('/api/users', [currentUserRouter, signInRouter, signOutRouter, signUpRouter]);

app.listen(3000, () => {
  console.info('Auth server listening on port 3000');
});
