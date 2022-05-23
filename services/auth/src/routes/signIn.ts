import { Router } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest';

const signInRouter = Router();

const signInValidations = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('You must supply a password'),
];

signInRouter.post('/signin', ...signInValidations, validateRequest, (req, res) => {
  return res.send('Hi signin');
});

export default signInRouter;
