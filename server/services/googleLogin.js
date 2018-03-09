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
      console.log('passport init.........');
      const existingUser = await User.findOne({ googleId });
      if (existingUser) {
        console.log('user exists................');
        done(null, existingUser);
      } else {
        console.log('creating new user.............');
        const newUser = await new User({ name, googleId }).save();
        done(null, newUser);
      }
    } catch (e) {
      console.log('passport catch error..........');
      throw e;
    }
  }
);

passport.serializeUser((user, done) => {
  console.log('serializeUser................');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserializeUser..................');
  User.findById(id).then(user => done(null, user));
});

passport.use(googleStrategy);
