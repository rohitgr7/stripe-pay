const passport = require('passport');

const googleAuthentication = passport.authenticate('google', {
  scope: ['profile', 'email']
});

const googleAuthenticated = passport.authenticate('google');

const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(404).send({ error: 'Please login first!' });
  }

  next();
};

module.exports = {
  googleAuthentication,
  googleAuthenticated,
  requireLogin
};
