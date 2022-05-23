import { Router } from 'express';
import jwt from 'jsonwebtoken';

const currentUserRouter = Router();

currentUserRouter.get('/current-user', (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY as string);

    return res.send({ currentUser: payload });
  } catch (error) {
    return res.send({ currentUser: null });
  }
});

export default currentUserRouter;
