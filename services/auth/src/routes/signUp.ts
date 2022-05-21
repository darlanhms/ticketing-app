import { Router } from 'express';

const signUpRouter = Router();

signUpRouter.post('/signup', (req, res) => {
  return res.send('Hi signup');
});

export default signUpRouter;
