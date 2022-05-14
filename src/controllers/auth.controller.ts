import wrapRouteHandler from './helper/wrapRouteHandler';

const redirectHome = wrapRouteHandler((_, response) => {
  response.redirect('/');
});

const logout = wrapRouteHandler((request, response) => {
  request.logout();
  response.redirect('/');
});

export default {
  redirectHome,
  logout,
};
