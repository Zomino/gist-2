import { type tRequestHandler as tMiddleware } from 'common';

const redirectIfNotAuthenticated: tMiddleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/');
  return next();
};

export default redirectIfNotAuthenticated;
