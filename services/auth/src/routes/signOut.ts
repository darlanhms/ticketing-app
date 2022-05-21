import { Router } from 'express';

const signOutRouter = Router();

signOutRouter.post('/signout', (req, res) => {
  return res.send('Hi signOut');
});

export default signOutRouter;
