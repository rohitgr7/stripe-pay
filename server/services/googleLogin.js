const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('mongoose').model('users');
const { googleClientID, googleClientSecret } = require('./../config');

const googleStrategyOptions = {
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
};

const googleStrategy = new GoogleStrategy(
  googleStrategyOptions,
  async (
    accessToken,
    refreshToken,
    { displayName: name, id: googleId },
    done
  ) => {
    try {
      const existingUser = await User.findOne({ googleId });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ name, googleId }).save();
        done(null, newUser);
      }
    } catch (e) {
      throw e;
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(googleStrategy);
