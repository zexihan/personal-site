/* eslint-disable global-require */
import 'dotenv/config';
import passport from 'passport';
import reactApp from './views/app';
import { requireUserAPI, requireAdminAPI } from './middleware';

const redirect = (req, res) => {
  const target = req.cookies.target || '/';
  res.clearCookie('target', { path: '/' });
  return res.redirect(target);
};

const routes = (app) => {
  app.get('/login/google', passport.authenticate('google'));

  app.get('/login/google/return', passport.authenticate('google', {
    failureRedirect: '/login',
  }), redirect);

  app.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/login/facebook/return', passport.authenticate('facebook', {
    failureRedirect: '/login',
  }), redirect);

  app.get('/logout', require('./views/logout'));

  app.get('/api/github', require('./api/github'));
  app.get('/api/lastfm', require('./api/lastfm'));

  app.get('/api/resume', requireUserAPI, require('./api/resume'));

  app.get('/api/admin', requireAdminAPI, require('./api/admin'));

  reactApp(app); // set up react routes
};

export default routes;
/* eslint-enable global-require */
