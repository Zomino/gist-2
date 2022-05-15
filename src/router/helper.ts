import { type Middleware } from 'common/types';

export const redirectIfAuthenticated: Middleware = (request, response, next) => {
  if (request.isAuthenticated()) return response.redirect('/');
  return next();
};

export const redirectIfNotAuthenticated: Middleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/login');
  return next();
};
