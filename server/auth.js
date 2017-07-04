import 'dotenv/config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import User from './models/User';

const port = process.env.PORT || 7999;

const hostname = process.env.HOSTNAME || `http://localhost:${port}`;

const auth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  const callback = (token, tokenSecret, profile, done) => {
    // update the user if s/he exists or add a new user
    User.findOne({ email: profile._json.email })
    .then((user) => {
      if (!user) {
        return User.create(Object.assign({ logins: [Date.now()] }, profile._json));
      }
      user.logins.push(Date.now());
      return user.save();
    }).then(user => done(null, user)).catch(error => done(error));
  };

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${hostname}/login/google/return`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: ['email'],
  }, callback));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `${hostname}/login/facebook/return`,
    profileFields: ['id', 'displayName', 'email'],
  }, callback));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

export default auth;
