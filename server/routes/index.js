 /* eslint-disable global-require */
import 'dotenv/config';
import passport from 'passport';
import reactApp from './views/app';
import { requireUserAPI, requireAdminAPI } from './middleware';

const routes = (app) => {
  app.get('/login/google', passport.authenticate('google'));

  app.get('/login/google/return', passport.authenticate('google', {
    failureRedirect: '/login',
  }), (req, res) => {
    const target = req.cookies.target || '/';
    res.clearCookie('target', { path: '/' });
    return res.redirect(target);
  });

  app.get('/logout', require('./views/logout'));

  app.get('/api/github', require('./api/github'));
  app.get('/api/lastfm', require('./api/lastfm'));

  // requireAdminAPI -- filter non-published
  app.get('/api/post', require('./api/post/list'));
  
  app.post('/api/post', require('./api/post/create'));
  app.get('/api/post/:id', require('./api/post/read'));
  app.put('/api/post/:id', require('./api/post/update'));
  app.delete('/api/post/:id', require('./api/post/destroy'));



  app.post('/api/gallery/upload', require('./api/upload'));
  app.get('/api/gallery/:id', require('./api/gallery'));


  app.get('/api/resume', requireUserAPI, require('./api/resume'));

  app.get('/api/admin', requireAdminAPI, require('./api/admin'));

  reactApp(app); // set up react routes
};

export default routes;
/* eslint-enable global-require */
