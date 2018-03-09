const router = require('express').Router();
const passport = require('passport');

console.log('auth Router....................');

require('./../services/googleLogin');
const {
  googleAuthentication,
  googleAuthenticated,
  requireLogin
} = require('./../middlewares');

router.get('/google', googleAuthentication);

router.get('/google/callback', googleAuthenticated, (req, res) => {
  console.log('google callback route........................');
  res.redirect('/');
});

router.get('/user', (req, res) => {
  console.log('requesting the user.......');
  console.log('user:', req.user);
  res.send(req.user);
});

router.get('/logout', requireLogin, (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
