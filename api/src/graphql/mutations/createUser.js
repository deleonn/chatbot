import bcrypt from 'bcrypt';
import User from '../../db/models/User';

const createUser = async (obj, { input }) => {
  const {
    name,
    username,
    email,
    password,
  } = input;

  const response = await bcrypt.hash(password, 10).then(async (hash) => {
    const user = await User.create({
      name,
      username,
      email,
      password: hash,
    });

    return user;
  });

  return response;
};

export default createUser;
