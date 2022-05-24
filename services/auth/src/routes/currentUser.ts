import { Router } from 'express';
import { currentUser } from '../middlewares/currentUser';

const currentUserRouter = Router();

currentUserRouter.get('/current-user', currentUser, (req, res) => {
  return res.json({ currentUser: req.currentUser || null });
});

export default currentUserRouter;
