import { Router } from 'express';

const signInRouter = Router();

signInRouter.post('/signin', (req, res) => {
  return res.send('Hi signin');
});

export default signInRouter;
