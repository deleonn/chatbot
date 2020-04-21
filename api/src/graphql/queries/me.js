import User from '../../db/models/User';

export default async (obj, args, { userKey }) => {
  const me = await (User.findOne({
    key: userKey,
  })
    .lean()
    .exec());

  return me;
};
