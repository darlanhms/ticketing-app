import { Router } from 'express';

const currentUserRouter = Router();

currentUserRouter.get('/current-user', (req, res) => {
  return res.send('Hi there');
});

export default currentUserRouter;
