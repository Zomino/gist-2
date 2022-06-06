import { type RequestHandler as Middleware } from 'common';

const redirectIfNotAuthenticated: Middleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/');
  return next();
};

export default redirectIfNotAuthenticated;
