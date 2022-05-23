import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/badRequestError';
import RequestValidationError from '../errors/requestValidationError';
import { User } from '../models/user';

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

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const user = User.build({
    password,
    email,
  });

  await user.save();

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY as string,
  );

  req.session = { jwt: userJwt };

  return res.json(user);
});

export default signUpRouter;
