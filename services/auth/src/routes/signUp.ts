import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import RequestValidationError from '../errors/requestValidationError';

const signUpRouter = Router();

const signUpRouterValidations = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters'),
];

signUpRouter.post('/signup', ...signUpRouterValidations, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  console.info('Creating a user...');

  return res.send({ email, password });
});

export default signUpRouter;
