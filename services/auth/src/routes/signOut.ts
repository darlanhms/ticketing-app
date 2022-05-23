import { Router } from 'express';

const signOutRouter = Router();

signOutRouter.post('/signout', (req, res) => {
  req.session = null;

  return res.status(200).send();
});

export default signOutRouter;
