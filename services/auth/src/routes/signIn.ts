import { Router } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/badRequestError';
import { validateRequest } from '../middlewares/validateRequest';
import { User } from '../models/user';
import { Password } from '../services/password';

const signInRouter = Router();

const signInValidations = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('You must supply a password'),
];

signInRouter.post('/signin', ...signInValidations, validateRequest, async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError('Invalid login credentials');
  }

  const passwordsMatch = await Password.compare(existingUser.password, password);
  if (!passwordsMatch) {
    throw new BadRequestError('Invalid login credentials');
  }

  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY as string,
  );

  req.session = { jwt: userJwt };

  return res.json(existingUser);
});

export default signInRouter;
