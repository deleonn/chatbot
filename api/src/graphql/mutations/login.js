import { ApolloError } from 'apollo-server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../db/models/User';
import { SECRET } from '../../config';

const login = async (obj, { input }) => {
  const {
    email,
    password,
  } = input;

  const user = await User.findOne({
    email,
  }).lean()
    .exec();

  if (!user) {
    throw new ApolloError('Invalid form values', 'BAD_USER_INPUT');
  }

  try {
    return bcrypt.compare(password, user.password)
      .then((result) => {
        if (result) {
          // Password correct. Generate jwt and return it.
          const token = jwt.sign({ key: user.key }, SECRET, { expiresIn: '90d' });
          return { access_token: token };
        }

        throw new ApolloError('Invalid form values', 'BAD_USER_INPUT');
      });
  } catch (error) {
    throw new ApolloError(error);
  }
};

export default login;
