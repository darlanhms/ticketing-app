/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import mongoose from 'mongoose';
import { Password } from '../services/password';

interface UserProps {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  build: (props: UserProps) => UserDocument;
}

interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = doc._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  },
);

userSchema.statics.build = (props: UserProps) => {
  return new User(props);
};

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));

    this.set('password', hashed);
  }

  done();
});

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };
