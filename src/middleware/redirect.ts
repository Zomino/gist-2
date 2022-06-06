import { type RequestHandler as Middleware } from 'common';

const redirectIfAuthenticated: Middleware = (request, response, next) => {
  if (request.isAuthenticated()) return response.redirect('/');
  return next();
};

const redirectIfNotAuthenticated: Middleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/login');
  return next();
};

export default {
  redirectIfAuthenticated,
  redirectIfNotAuthenticated,
};
