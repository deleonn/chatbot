import passportJWT from 'passport-jwt';
import { SECRET } from '../config';
import User from '../db/models/User';

const { Strategy, ExtractJwt } = passportJWT;

const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

const strategy = new Strategy(params,
  (jwtpayload, cb) => User.findOne({ key: jwtpayload.key })
    .then(user => cb(null, user))
    .catch(error => cb(error)));

export default strategy;
