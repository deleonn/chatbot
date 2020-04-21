import passport from 'passport';
import authStrategy from './auth';

const applyAuthMiddleware = (app) => {
  passport.use(authStrategy);
  app.use(passport.initialize());

  app.use((req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (user) {
        req.userKey = user.key;
      }

      next();
    })(req, res, next);
  });
};

export default applyAuthMiddleware;
